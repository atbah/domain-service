<script lang="ts">
  import { Icon, Home } from 'svelte-hero-icons'
  export let color = "gray-800"
  export let size = "24"
</script>

<Icon src={Home} size="{size}" class="text-{color}" />
