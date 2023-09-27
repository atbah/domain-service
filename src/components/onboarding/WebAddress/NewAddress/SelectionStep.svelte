<script lang="ts">
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import Typography from '$lib/components/Form/Typography.svelte'
  import { changeUserProfile } from '$lib/stores/userStore'

  export let previousStep: () => void
  export let nextStep: () => void
  export let onChange: (value: string) => void

  // TODO: website domains
  let selectedDomain: string;
  const options = ['mybusiness.com', 'mybusiness.com.au', 'mybusiness.io', 'mybusiness.live']

  const onSelectOption = (option: string) => {
    selectedDomain = option
    onChange(option)
  }

  const handleSubmit = () => {
    if (!selectedDomain) {
      toast.push('Please select one of the domains')
    } else {
      changeUserProfile({
        website: selectedDomain
      })
      nextStep()
    }
  }

  const optionStyle = "flex items-center px-6 py-5 rounded rounded-xl cursor-pointer border border-gray-500"
</script>

<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">The web address is available!</Typography>
    <Typography color="gray-500">Further instruction in one line</Typography>
  </div>
</div>
{#each options as option}
  <div class="mb-3">
    <div
      class="{optionStyle} {selectedDomain === option && 'border-2 border-green'}"
      on:click={() => onSelectOption(option)}
    >
      <div class="flex w-[16px] h-[16px] rounded-full border border-gray-500 {selectedDomain === option ? 'bg-primary' : 'bg-white'}">
        {#if selectedDomain === option}
          <div class="m-auto w-[8px] h-[8px] bg-white rounded-full"></div>
        {/if}
      </div>
      <div class="ml-4">
        <Typography fontWeight="medium">{option}</Typography>
      </div>
    </div>
  </div>
{/each}

<div class="flex row justify-between mt-4">
  <div>
    <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>Back</a>
  </div>
  <div class="flex row">
    <a href={null} class="flex row items-center cursor-pointer" on:click={handleSubmit}>
      <span class="mr-2"><Typography fontWeight="medium">Next</Typography></span>
      <Icon src={ArrowRight} size="20" class="text-gray-900" solid />
    </a>
  </div>
</div>
