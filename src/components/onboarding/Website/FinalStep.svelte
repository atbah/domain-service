<script lang="ts">
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import { user } from '$lib/stores/userStore'

  export let previousStep: () => void
  export let nextStep: () => void
  export let skip: () => void

  const onViewWebsite = () => {
    console.log($user?.profile?.website)
  }
</script>

<div class="p-4 bg-primary rounded-2xl">
  <div class="sm:hidden">
    <div class="max-w-96">
      <Typography size="xl" color="white" fontWeight="medium">Your website is not ready to go.</Typography>
      <Typography color="white">Further instruction in one line.{'\n'}Further instruction in one line.</Typography>
    </div>

    <Button
      md
      type="button"
      class="mt-2 border border-gray-200 bg-white hover:bg-gray-100"
      on:click={onViewWebsite}
    >
      <Typography color="black" fontWeight="medium">Visit Website</Typography>
    </Button>
  </div>

  <div class="hidden sm:flex justify-between items-center">
    <div class="max-w-96">
      <Typography size="xl" color="white" fontWeight="medium">Your website is not ready to go.</Typography>
      <Typography color="white">Further instruction in one line.{'\n'}Further instruction in one line.</Typography>
    </div>

    <Button
      md
      type="button"
      class="mr-5 border border-gray-200 bg-white hover:bg-gray-100"
      on:click={onViewWebsite}
    >
      <Typography color="black" fontWeight="medium">Visit Website</Typography>
    </Button>
  </div>
</div>

<!-- desktop footer -->
<div class="row justify-between mt-4 hidden sm:flex">
  <div>
    <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>Back</a>
  </div>
  <div class="flex row">
    <a href={null} class="flex row items-center cursor-pointer" on:click={nextStep}>
      <span class="mr-2"><Typography fontWeight="medium">Start</Typography></span>
      <Icon src={ArrowRight} size="20" class="text-gray-900" solid />
    </a>
  </div>
</div>
<!-- end footer -->

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
        <a href={null} class="text-gray-500 cursor-pointer" on:click={skip}>
          <Typography color="gray-600">Skip for now</Typography>
        </a>
      </div>
    </div>
  </div>
</div>
<!-- end footer -->
