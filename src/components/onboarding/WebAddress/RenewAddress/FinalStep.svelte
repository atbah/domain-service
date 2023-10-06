<script lang="ts">
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import Tag from '$lib/components/Tag.svelte'
  import type { Duration } from '$lib/types'

  export let previousStep: () => void
  export let nextStep: () => void

  const TEST_DATA: Duration = {
    name: 'mybusiness.com',
    price: 329,
    currency: '$',
    discount: 67
  }


  const onRenew = () => {
    // TODO: show modal

    nextStep()
  }
</script>

<!-- TODO: show success alert -->

<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Payment method</Typography>
    <Typography color="gray-500">You can review you order in the next step before it’s final.</Typography>
  </div>
</div>

<div class="rounded-xl border border-gray-200 mb-2.5 px-5 py-4">
  <div class="flex self-center items-center justify-between h-12">
    <div>
      <Typography size="xl" fontWeight="medium">{TEST_DATA.name}</Typography>
      <Typography size="sm" color="gray-600">4 years</Typography>
    </div>
    
    <div class="text-right">
      <Typography fontWeight="medium">{TEST_DATA.currency}{TEST_DATA.price}</Typography>
      {#if TEST_DATA.discount && TEST_DATA.discount > 0}
        <div class="">
          <Tag>
            <Typography size="sm" color="primary">Save {TEST_DATA.currency}{TEST_DATA.discount}</Typography>
          </Tag>
        </div>
      {/if}
    </div>
  </div>
</div>

<!--TODO: show input here to add card number -->


<!-- desktop footer -->
<div class="hidden sm:flex justify-between items-end mt-4">
  <div>
    <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>Back</a>
  </div>

  <div class="flex row">
    <Button
      md
      type="button"
      class="bg-primary hover:bg-primary-100"
      on:click={onRenew}
    >
      <Typography color="white" fontWeight="medium">Renew</Typography>
    </Button>
  </div>
</div>

<!-- mobile footer -->
<div class="fixed bottom-20 left-0 right-0 sm:hidden">
  <div class="flex justify-center">
    <div class="w-64 text-center">
      <Button
        fullwidth
        type="button"
        class="text-white bg-primary hover:bg-primary-300"
        on:click={nextStep}
      >
        <Typography size="default" color="white" fontWeight="medium">Next</Typography>
      </Button>

      <div class="pt-6">
      </div>
    </div>
  </div>
</div>
<!-- end footer -->