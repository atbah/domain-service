<script lang="ts">
  import { Icon, ArrowRight, Check } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import Gallery from '$lib/components/Gallery.svelte'
	import type { EmailProvider, EmailProviderPlan } from '$lib/types'

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

  {#if selectedOption}
    <div>
      <img src={selectedOption.icon} alt="{selectedOption.name}" />
    </div>
  {/if}
</div>
<Gallery wrapperClass="gap-2 grid-cols-1 sm:grid-cols-2">
  {#if selectedOption}
    {#each selectedOption.plans as option}
      <a
        href={null}
        class="{optionStyle} {selectedPlan && selectedPlan.name === option.name && 'border-2 border-green'}"
        on:click={() => onSelectOption(option)}
      >
        <div class="flex justify-between items-center mb-3">
          <Typography fontWeight="medium">{option.name}</Typography>
          <Typography fontWeight="medium">{option.currency}{option.price}/{option.type}</Typography>
        </div>
        <div>
          {#each option?.features || [] as feature, featureIndex}
            <div class="flex items-center mb-1">
              <Icon src={Check} class="text-gray-300 mr-1" size="20" solid />
              <div class="flex items-center">
                <Typography color="gray-600" size="sm" fontWeight="xs">{feature}</Typography>

                {#if featureIndex === 3}
                  <div class="ml-2.5 flex items-center">
                    {#each option?.icons || [] as featureIcon}
                      <div class="mr-1.5">
                        <img src={featureIcon} alt="feature icon" />
                      </div>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </a>
    {/each}
  {/if}
</Gallery>

<!-- desktop footer -->
<div class="hidden sm:flex row justify-between mt-4">
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
        <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>
          <Typography color="gray-600">Back</Typography>
        </a>
      </div>
    </div>
  </div>
</div>
<!-- end footer -->