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
      <Typography size="xl" fontWeight="medium">{domain}</Typography>
      <Typography color="gray-500">Expires in 3 months</Typography>
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

<div class="flex row justify-between mt-4">
  <div></div>
  <div class="flex row">
    <a href={null} class="flex row items-center cursor-pointer" on:click={nextStep}>
      <span class="mr-2"><Typography fontWeight="medium">Back to Dashboard</Typography></span>
      <Icon src={ArrowRight} size="20" class="text-gray-900" solid />
    </a>
  </div>
</div>