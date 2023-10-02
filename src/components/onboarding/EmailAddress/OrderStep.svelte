<script lang="ts">
  import { Icon, ArrowRight, Trophy } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import { changeUserProfile } from '$lib/stores/userStore'
  import type { EmailProvider, EmailProviderPlan } from '$lib/types';

  export let previousStep: () => void
  export let nextStep: () => void
  export let selectedOption: EmailProvider

  const optionStyle = "px-6 py-5 rounded rounded-xl cursor-pointer border border-gray-500"
</script>

<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Order summary</Typography>
    <Typography color="gray-500">Further instruction in one line</Typography>
  </div>
</div>
<div class="{optionStyle} mb-4">
  <div class="flex items-center">
    <Icon src={Trophy} size="32" />
    <div class="flex-1 ml-4">
      <div class="flex items-center justify-between">
        <Typography fontWeight="medium">{selectedOption.name}</Typography>
        <Typography fontWeight="medium">$27/m</Typography>
      </div>
      <div class="flex items-center justify-between">
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
  <div>
    <Typography fontWeight="medium">Email Address</Typography>
    <Typography size="sm" color="gray-500">edward@mybusiness.com.au</Typography>
  </div>
</div>

<div class="flex row items-center justify-between mt-4">
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
