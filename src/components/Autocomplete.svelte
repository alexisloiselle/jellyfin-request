<script lang="ts">
  import Autocomplete, {
    AutocompleteComponentDev,
  } from "@smui-extra/autocomplete";
  import { Content, formatContent } from "../models/content";
  import type { Kind } from "../models/kind";
  import TmdbService from "../services/api/tmdb";

  export let kind: Kind;
  export let value: Content | undefined;
  let autocomplete: AutocompleteComponentDev;
  let justChanged = false;

  const onChange = (e: CustomEvent<Content>) => {
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
</script>

<Autocomplete
  bind:this={autocomplete}
  bind:value
  on:SMUIAutocomplete:selected={onChange}
  disabled={!kind}
  search={searchItems}
  showMenuWithNoInput={false}
  getOptionLabel={formatContent}
  label="Title"
/>
