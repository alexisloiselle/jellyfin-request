<script lang="ts">
  import Form from "./components/Form.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

<main>
  <Form />
</main>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
