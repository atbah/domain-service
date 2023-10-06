<script lang="ts">
  import { Icon, Check } from 'svelte-hero-icons'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import InputField from '$lib/components/Form/InputField.svelte'

  let error: string
  let cardNumber: string

  const handleChange = (e: Event) => {
    cardNumber = (e.target as HTMLInputElement).value
  }
</script>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div>
    <Typography size="default">Billing ABN</Typography>
    <Typography size="sm" color="gray-500">Further instruction in one line</Typography>
  </div>
  <div class="col-span-2">
    <div class="mb-2">
      <Typography size="sm" color="gray-700">ABN</Typography>
    </div>

    <InputField
      md
      type="text"
      name="card_number"
      label=""
      inputClass="text-gray-900 rounded-xl border border-gray-200 mb-2"
      error={error}
      bind:value={cardNumber}
      onChange={handleChange}
    />

    <div class="mb-2">
      <Typography size="xs" color="gray-700">Change ABN for tax purposes only, if you wish to transfer ownership of your Web Address, please contract our support team.</Typography>
    </div>

    <div class="mt-6 sm:flex items-center">
      <Button
        md
        type="button"
        class="text-white bg-primary hover:bg-primary-300 mr-6"
        on:click={() => {}}
      >
        <Typography size="default" color="white" fontWeight="medium">Change ABN</Typography>
      </Button>
    </div>
  </div>
</div>
