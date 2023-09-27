<script lang="ts">
  import type { SelectOptionType } from '$lib/components/types'
  
  export let items: SelectOptionType[]
  export let value: string | null
  export let placeholder: string | undefined
  export let change: (event: any) => void
</script>

<select class="select select-bordered w-full max-w-xs" bind:value={value} on:change={change}>
  <option disabled selected={!value}>{placeholder || 'Choose an option'}</option>
  {#each items as item}
      <option value={item.value}>{item.name}</option>
  {/each}
</select>