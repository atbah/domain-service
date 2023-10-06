<script lang="ts">
  import Select from '$lib/components/Form/Select.svelte'
  import type { SelectOptionType } from '$lib/components/types'
  import Billing from './billing/index.svelte'
  
  let currentPage = 'billing'
  const items: SelectOptionType[] = [
    {
      name: 'Billing',
      value: 'billing'
    }
  ]

  const onChange = (page: string) => {
    currentPage = page
  }
</script>

<div class="p-5 sm:p-8">
  <div class="mb-5">
    <Select
      placeholder=""
      className="w-full rounded-xl border-gray-200 outline-none"
      items={items}
      value={currentPage}
      change={onChange}
    />
  </div>
  <Billing />
</div>
