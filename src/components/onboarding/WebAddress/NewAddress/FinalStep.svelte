<script lang="ts">
  import { goto } from '$app/navigation'
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import RoundLabel from '$lib/components/Form/RoundLabel.svelte'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import { user } from '$lib/stores/userStore'

  export let domain: string
  export let nextStep: () => void

  const onSetpEmail = () => {
    goto('/onboarding')
  }

  const onSetupWebsite = () => {
    goto('/onboarding')
  }
</script>

<!-- TODO: show success alert -->

<div class="p-3 bg-white border border-gray-200 rounded-xl">
  <div class="flex justify-between items-center">
    <div>
      <div class="inline-block mb-4">
        <RoundLabel type="success" text="Active" />
      </div>
      <Typography size="default" fontWeight="medium">{domain}</Typography>
      <Typography size="sm" color="gray-500">Expires in 3 months</Typography>
    </div>

    <div>
      <Button
        md
        type="button"
        class="mr-5 bg-primary hover:bg-primary-100"
        on:click={onSetpEmail}
      >
        <Typography color="white" fontWeight="medium">Setup Email</Typography>
      </Button>
      <Button
        md
        type="button"
        class="bg-primary hover:bg-primary-100"
        on:click={onSetupWebsite}
      >
        <Typography color="white" fontWeight="medium">Setup Website</Typography>
      </Button>
    </div>
  </div>
</div>

<div class="hidden sm:flex row justify-between mt-4">
  <div></div>
  <div class="flex row">
    <a href={null} class="flex row items-center cursor-pointer" on:click={nextStep}>
      <span class="mr-2"><Typography fontWeight="medium">Back to Dashboard</Typography></span>
      <Icon src={ArrowRight} size="20" class="text-gray-900" solid />
    </a>
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