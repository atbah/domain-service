<script lang="ts">
  import { Icon, GlobeAlt } from 'svelte-hero-icons'
  export let color = "gray-800"
  export let size = "24"
</script>

<Icon src={GlobeAlt} size="{size}" class="text-{color}" />
