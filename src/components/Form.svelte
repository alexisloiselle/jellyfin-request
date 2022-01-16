<script lang="ts">
  import Autocomplete, {
    AutocompleteComponentDev,
  } from "@smui-extra/autocomplete";
  import Button, { Label } from "@smui/button";
  import Card, { Content } from "@smui/card";
  import CircularProgress from "@smui/circular-progress";
  import Select, { Option } from "@smui/select";
  import Snackbar, { SnackbarComponentDev } from "@smui/snackbar";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";

  import type { Kind } from "../models/kind";
  import {
    Content as WatchableContent,
    formatContent,
  } from "../models/content";
  import TmdbService from "../services/api/tmdb";
  import SendGridService from "../services/api/sendgrid";

  let kind: Kind | undefined;
  let content: WatchableContent | undefined;
  let note = "";
  let isLoading = false;

  let justChanged = false;
  let autocomplete: AutocompleteComponentDev;
  let snackbar: SnackbarComponentDev;
  let snackbarError: SnackbarComponentDev;

  const onChange = () => {
    justChanged = true;
  };

  const searchItems = async (input: string) => {
    if (justChanged) {
      justChanged = false;
      autocomplete.focus();
      autocomplete.blur();
      return false;
    }
    if (input === "" || !kind) {
      return [];
    }

    return await TmdbService.query(kind, input);
  };

  const send = async () => {
    try {
      isLoading = true;
      await SendGridService.sendEmail(content, note);

      snackbar.open();

      kind = undefined;
      content = undefined;
      note = "";
    } catch (err) {
      console.log(err);
      snackbarError.open();
    } finally {
      isLoading = false;
    }
  };
</script>

<div class="form">
  <Card>
    <Content class="card-content">
      <h1 class="title">Request Form</h1>
      <div style="width: 100%;">
        <div class="field">
          <Select bind:value={kind} label="Content Type">
            <Option value="Show">TV Show</Option>
            <Option value="Movie">Movie</Option>
          </Select>
        </div>
        <div class="field">
          <Autocomplete
            bind:this={autocomplete}
            bind:value={content}
            on:SMUIAutocomplete:selected={onChange}
            disabled={!kind}
            search={searchItems}
            showMenuWithNoInput={false}
            getOptionLabel={formatContent}
            label="Title"
          />
        </div>
        <div class="field">
          <Textfield bind:value={note} label="Note">
            <HelperText slot="helper">e.g. Only season 2</HelperText>
          </Textfield>
        </div>
        <div class="field">
          <Button on:click={send} disabled={!kind || !content} variant="raised">
            <div class="button-content">
              <CircularProgress
                class="loading"
                style="opacity: {isLoading ? 1 : 0};"
                indeterminate
              />
              <Label>Send</Label>
              <div style="width: 24px;" />
            </div>
          </Button>
        </div>
      </div>
    </Content>
  </Card>
  <Snackbar bind:this={snackbar}>
    <Label>Thank you!</Label>
  </Snackbar>
  <Snackbar
    surface$style="background-color: #951c13;"
    bind:this={snackbarError}
  >
    <Label>Sorry, something went wrong</Label>
  </Snackbar>
</div>

<style>
  * :global(.mdc-card) {
    background-color: #303030;
    width: 50vw;
    min-width: 224px;
    margin-top: 32px;
  }

  .title {
    color: #fff;
  }

  * :global(.card-content) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  /* Field */
  .field {
    width: 100%;
  }
  .field:not(:first-child) {
    margin-top: 16px;
  }
  * :global(.mdc-line-ripple::before) {
    border-bottom-color: #fff !important;
  }
  * :global(.mdc-floating-label) {
    color: #fff !important;
  }

  /* Select */
  * :global(.mdc-select) {
    width: 100%;
  }
  * :global(.mdc-select__selected-text) {
    color: #fff !important;
  }
  * :global(.mdc-select__dropdown-icon) {
    fill: #fff !important;
  }

  /* Autocomplete */
  * :global(.smui-autocomplete),
  :global(.mdc-text-field) {
    width: 100%;
  }
  * :global(.mdc-text-field__input) {
    color: #fff !important;
  }
  * :global(.mdc-text-field.mdc-text-field--disabled) {
    opacity: 0.5;
  }

  /* Helper text */
  * :global(.mdc-text-field-helper-text) {
    color: #fff !important;
  }

  /* Button */
  * :global(.mdc-button) {
    width: 100%;
    color: #fff !important;
  }
  * :global(.mdc-button:disabled) {
    background-color: var(--mdc-theme-primary);
    opacity: 0.5;
  }
  * :global(.mdc-button:active) {
    background-color: var(--mdc-theme-primary);
  }
  * :global(.mdc-circular-progress__indeterminate-circle-graphic) {
    stroke: white;
  }
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  * :global(.loading) {
    height: 24px;
    width: 24px;
    color: white;
  }

  .form {
    display: flex;
    justify-content: center;
  }
</style>
