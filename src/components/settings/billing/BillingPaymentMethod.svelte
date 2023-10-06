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

<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
  <div>
    <Typography size="default">Payment Method</Typography>
    <Typography size="sm" color="gray-500">Update your payment method</Typography>
  </div>
  <div class="col-span-2">
    <div class="mb-2">
      <Typography size="sm" color="gray-700">Payment Method</Typography>
    </div>

    <InputField
      md
      type="text"
      name="card_number"
      label=""
      inputClass="text-gray-900 rounded-xl border border-gray-200"
      error={error}
      bind:value={cardNumber}
      onChange={handleChange}
    />

    <div class="mt-6 sm:flex items-center">
      <Button
        md
        type="button"
        class="text-white bg-primary hover:bg-primary-300 mr-6"
        on:click={() => {}}
      >
        <Typography size="default" color="white" fontWeight="medium">Change payment method</Typography>
      </Button>
    </div>
  </div>
</div>
