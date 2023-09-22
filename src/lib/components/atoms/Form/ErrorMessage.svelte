<script lang="ts">
	export let error: null | string = ''
</script>

{#if error}
	<p class="text-accent mb-2">{error}</p>
{/if}
