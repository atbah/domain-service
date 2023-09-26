<script lang="ts">
  import { createForm } from 'svelte-forms-lib'
  import * as yup from 'yup'
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import InputField from '$lib/components/atoms/Form/InputField.svelte'
  import RoundLabel from '$lib/components/atoms/Form/RoundLabel.svelte'
  import Typography from '$lib/components/atoms/Form/Typography.svelte'
  import Button from '$lib/components/atoms/Form/Button.svelte'
  import { user, changeUserProfile, changeOnboardingStep } from '$lib/stores/userStore'

  export let nextStep: () => void

  // TODO: website domains
  let selectedDomain: string;
  const options = ['mybusiness.com', 'championweb.com.au']
  const _intializeValues = () => {
    return {
      businessName: '',
      registrationDate: null,
      renewalDate: null
    }
  }

  const onSelectOption = (option: string) => {
    selectedDomain = option
    console.log("selected: ", option)
  }

  const handleSubmit = () => {
    if (!selectedDomain) {
      toast.push('Please select one of the domains')
    } else {
      changeUserProfile({
        domain: selectedDomain
      })
      nextStep()
    }
  }

  const optionStyle = "flex items-center p-4 rounded rounded-xl cursor-pointer border border-gray-500"
</script>

<div class="flex w-164 mx-auto">
  <form class="w-full mt-32" on:submit={handleSubmit}>
    <div class="flex flex-row justify-between mb-4">
      <div>
        <Typography size="2xl">Build your website</Typography>
        <Typography color="gray-500">Select website</Typography>
      </div>
    </div>
    {#each options as option}
      <div class="mb-2">
        <div
          class="{optionStyle} {selectedDomain === option && 'border-green'}"
          on:click={() => onSelectOption(option)}
        >
          <div class="flex w-6 h-6 bg-white rounded-full border border-gray-500 {selectedDomain === option && 'bg-green'}">
            {#if selectedDomain === option}
              <div class="m-auto w-3 h-3 bg-white rounded-full"></div>
            {/if}
          </div>
          <div class="ml-4 text-xl">
            {option}
          </div>
        </div>
      </div>
    {/each}

    <div class="flex row justify-between mt-4">
      <div></div>
      <div class="flex row">
        <a href={null} class="mr-3 text-gray-500 cursor-pointer" on:click={nextStep}>Skip for now</a>
        <a href={null} class="flex row items-center cursor-pointer" on:click={handleSubmit}>
          <span class="mr-2">Next</span>
          <Icon src={ArrowRight} size="14" class="text-black" solid />
        </a>
      </div>
    </div>
  </form>
</div>
