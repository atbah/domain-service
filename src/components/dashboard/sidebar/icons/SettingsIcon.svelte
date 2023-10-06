<script lang="ts">
  import { Icon, Cog6Tooth } from 'svelte-hero-icons'
  export let color = "gray-800"
  export let size = "24"

	$: console.log(color)
</script>

<Icon src={Cog6Tooth} size="{size}" class="text-{color}" />
