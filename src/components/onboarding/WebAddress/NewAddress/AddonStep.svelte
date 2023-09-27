<script lang="ts">
  import { Toggle } from 'flowbite-svelte';
  import { Icon, ArrowRight, Check, Minus, Plus } from 'svelte-hero-icons'
  import Typography from '$lib/components/Form/Typography.svelte'
  import { user } from '$lib/stores/userStore'
  
  export let domain: string
  export let previousStep: () => void
  export let nextStep: () => void

  let duration: number = 1

  const changeDuration = (value: number) => {
    console.log("~~~~~~~~~~")
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
      <div class="bg-white rounded-full w-[18px] h-[18px] flex items-center justify-center">
        <Icon src={Check} color="green" size="14" />
      </div>
      <div class="ml-4">
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
      <div class="flex">
        <a
          href={null}
          class="w-[20px] h-[20px] flex rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer"
          on:click={() => changeDuration(-1)}
        >
          <Icon src={Minus} class="m-auto" size="14" />
        </a>
      </div>
      <div class="mx-5 pointer-events-none">
        <Typography>{duration} year</Typography>
      </div>
      <a
        href={null}
        class="w-[20px] h-[20px] flex rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer"
        on:click={() => changeDuration(1)}
      >
        <Icon src={Plus} class="m-auto" size="14" />
      </a>
    </div>
    <div class="flex justify-between p-4 border-t border-gray-500">
      <Typography>Auto-renew</Typography>
      <Toggle color="green"></Toggle>
    </div>
  </div>
</div>

<div class="flex row justify-between mt-4">
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
