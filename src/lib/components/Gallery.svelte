<script lang="ts">
  import { Gallery } from 'flowbite-svelte'

  export let wrapperClass: string
</script>

<Gallery class="{wrapperClass}">
  <slot></slot>
</Gallery>
