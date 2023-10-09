<script lang="ts">
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import type { EmailProvider } from '$lib/types';

  export let previousStep: () => void
  export let nextStep: () => void
  export let selectedOption: EmailProvider

  const optionStyle = "py-4 rounded rounded-xl cursor-pointer border border-gray-500"
</script>

<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Order summary</Typography>
    <Typography color="gray-500">Further instruction in one line</Typography>
  </div>
</div>
<div class="{optionStyle} mb-4">
  <div class="px-5 pb-4 flex items-center">
    <div>
      <img src={selectedOption.icon} alt="{selectedOption.name}" />
    </div>

    <div class="flex-1 ml-4">
      <div class="flex items-center justify-between">
        <Typography fontWeight="medium">{selectedOption.name}</Typography>
        <Typography fontWeight="medium">$27/m</Typography>
      </div>
      <div class="block sm:flex items-center justify-between mb-1">
        <div class="flex items-center">
          <Typography color="gray-600" fontWeight="sm">30 GB storage</Typography>
          <div class="mx-1">
            <Typography color="gray-500" fontWeight="sm">∙</Typography>
          </div>
          <Typography color="primary" fontWeight="sm">3 seats</Typography>
        </div>
        <Typography color="gray-600" fontWeight="sm">Billed monthly on Visa - 4699</Typography>
      </div>
    </div>
  </div>
  <div class="px-5 pt-4 border-t border-gray-500">
    <Typography fontWeight="medium">Email Address</Typography>
    <Typography size="sm">edward@mybusiness.com.au</Typography>
  </div>
</div>

<!-- desktop footer -->
<div class="hidden sm:flex row items-center justify-between mt-4">
  <div>
    <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>Back</a>
  </div>
  <div class="flex row">
    <Button
      fullwidth
      type="button"
      class="px-6 text-white bg-primary hover:bg-primary-300"
      on:click={nextStep}
    >
      <Typography color="white" fontWeight="medium">Confirm Order</Typography>
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
        <Typography size="default" color="white" fontWeight="medium">Confirm Order</Typography>
      </Button>

      <div class="pt-6">
        <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>
          <Typography color="gray-600">Back</Typography>
        </a>
      </div>
    </div>
  </div>
</div>
<!-- end footer -->
