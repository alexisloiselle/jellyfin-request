<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
