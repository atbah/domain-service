<script lang="ts">
	import { onMount } from 'svelte';
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import Tag from '$lib/components/Tag.svelte'
  import { TEST_DURATION } from '$lib/data/data'
  import type { Duration } from '$lib/types'
  
  export let domain: string
  export let previousStep: () => void
  export let nextStep: () => void

  let options: Duration[] = []
  let duration: number = 1

  const changeDuration = (value: number) => {
    const newDuration = duration + value
    if (newDuration < 1) {
      return
    }
    duration += value
  }

  onMount(() => {
    const fetchDurations = () => {
      return TEST_DURATION
    }

    options = fetchDurations()
  })
</script>

<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Duration</Typography>
    <Typography color="gray-500">Choose the number of years to renew for</Typography>
  </div>
</div>

<div>
  {#each options as option}
    <div class="rounded-xl pb-1 border border-gray-200 mb-2.5 px-5 py-4">
      <div class="flex self-center items-center justify-between h-12">
        <Typography>{option.name}</Typography>
        
        <div class="text-right">
          <Typography fontWeight="medium">{option.currency}{option.price}</Typography>
          {#if option.discount && option.discount > 0}
            <div class="">
              <Tag>
                <Typography size="sm" color="primary">Save {option.currency}{option.discount}</Typography>
              </Tag>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>

<!-- desktop header -->
<div class="hidden sm:flex justify-between items-center mt-4">
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
