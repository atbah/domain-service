<script lang="ts">
  import { Toggle } from 'flowbite-svelte';
  import { Icon, ArrowRight, CheckCircle, PlusCircle, MinusCircle } from 'svelte-hero-icons'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import { user } from '$lib/stores/userStore'
  
  export let domain: string
  export let previousStep: () => void
  export let nextStep: () => void

  let duration: number = 1

  const changeDuration = (value: number) => {
    const newDuration = duration + value
    if (newDuration < 1) {
      return
    }
    duration += value
  }
</script>

<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Duration and Add-ons!</Typography>
    <Typography color="gray-500">Further instruction in one line</Typography>
  </div>
</div>

<div class="bg-primary-500 rounded-xl pb-1">
  <div class="flex justify-between items-center py-4 px-6">
    <div class="flex items-center">
      <Icon src={CheckCircle} class="text-white" solid size="20" />
      <div class="ml-3">
        <Typography color="white">{domain}</Typography>
      </div>
    </div>
    <div>
      <Typography color="white">$9/hr</Typography>
    </div>
  </div>

  <div class="bg-white rounded-xl mx-1">
    <div class="flex justify-between items-center p-4">
      <div class="flex-1">
        <Typography>Duration</Typography>
      </div>
      <div class="flex items-center">
        <a href={null} class={`cursor-pointer`} on:click={() => changeDuration(-1)}>
          <Icon src={MinusCircle} class={`${duration === 1 ? 'text-gray-400' : 'text-gray-900'}`} size="20" solid={duration === 1} />
        </a>
      </div>
      <div class="mx-3 pointer-events-none">
        <Typography>{duration} year</Typography>
      </div>
      <a href={null} class="cursor-pointer" on:click={() => changeDuration(1)}>
        <Icon src={PlusCircle} class="text-gray-900" size="20" />
      </a>
    </div>
    <div class="flex justify-between p-4 border-t border-gray-500">
      <Typography>Auto-renew</Typography>
      <Toggle color="green"></Toggle>
    </div>
  </div>
</div>

<div class="hidden sm:flex row justify-between mt-4">
  <div>
    <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>Back</a>
  </div>
  <div class="flex row">
    <a href={null} class="flex row items-center cursor-pointer" on:click={nextStep}>
      <span class="mr-2"><Typography fontWeight="medium">Next</Typography></span>
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