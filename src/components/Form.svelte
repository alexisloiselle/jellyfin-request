<script lang="ts">
  import Button, { Label } from "@smui/button";
  import Card, { Content } from "@smui/card";
  import CircularProgress from "@smui/circular-progress";
  import Select, { Option } from "@smui/select";
  import Snackbar, { SnackbarComponentDev } from "@smui/snackbar";
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";

  import type { Kind } from "../models/kind";
  import type { Content as WatchableContent } from "../models/content";
  import SendGridService from "../services/api/sendgrid";
  import Autocomplete from "./Autocomplete.svelte";

  let kind: Kind | undefined;
  let content: WatchableContent | undefined;
  let note = "";
  let isLoading = false;

  let snackbar: SnackbarComponentDev;
  let snackbarError: SnackbarComponentDev;

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
  <Card class="card">
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
          <Autocomplete {kind} bind:value={content} />
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
  .form {
    display: flex;
    justify-content: center;
  }

  * :global(.card) {
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

  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
</style>
