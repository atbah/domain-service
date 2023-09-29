<script lang="ts">
  import { Icon, ArrowRight, Check, Trophy } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Gallery from '$lib/components/Gallery.svelte'
  import { changeUserProfile } from '$lib/stores/userStore'
	import type { EmailProvider, EmailProviderPlan } from '$lib/types';

  export let previousStep: () => void
  export let nextStep: () => void
  export let selectedOption: EmailProvider

  // TODO: website domains
  let selectedPlan: EmailProviderPlan;
  const options = ['mybusiness.com', 'mybusiness.com.au', 'mybusiness.io', 'mybusiness.live']

  const onSelectOption = (option: EmailProviderPlan) => {
    selectedPlan = option
  }

  const handleSubmit = () => {
    if (!selectedPlan) {
      toast.push('Please select one of the domains')
    } else {
      // changeUserProfile({
      //   website: selectedDomain
      // })
      nextStep()
    }
  }

  const optionStyle = "px-6 py-5 rounded rounded-xl cursor-pointer border border-gray-200"
</script>

<div class="flex flex-row justify-between items-center mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Pick a plan</Typography>
    <Typography color="gray-500">Further instruction in one line</Typography>
  </div>

  <Icon src={Trophy} size="32" solid />
</div>
<Gallery wrapperClass="gap-2 grid-cols-2">
  {#if selectedOption}
    {#each selectedOption.plans as option}
      <div
        class="{optionStyle} {selectedPlan && selectedPlan.name === option.name && 'border-2 border-green'}"
        on:click={() => onSelectOption(option)}
      >
        <div class="flex justify-between items-center mb-3">
          <Typography fontWeight="medium">{option.name}</Typography>
          <Typography fontWeight="medium">{option.currency}{option.price}/{option.type}</Typography>
        </div>
        <div>
          {#each option?.features || [] as feature}
            <div class="flex items-center mb-1">
              <Icon src={Check} class="text-gray-300 mr-1" size="20" solid />
              <Typography color="gray-600" size="sm" fontWeight="xs">{feature}</Typography>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  {/if}
</Gallery>

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
