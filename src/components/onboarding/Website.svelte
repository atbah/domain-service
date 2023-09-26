<script lang="ts">
  import { createForm } from 'svelte-forms-lib'
  import * as yup from 'yup'
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import InputField from '$lib/components/Form/InputField.svelte'
  import RoundLabel from '$lib/components/Form/RoundLabel.svelte'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
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

  const optionStyle = "flex items-center px-6 py-5 rounded rounded-xl cursor-pointer border border-gray-500"

  $: console.log("option: ", selectedDomain)
</script>

<div class="flex w-164 mx-auto">
  <form class="w-full mt-32" on:submit={handleSubmit}>
    <div class="flex flex-row justify-between mb-4">
      <div>
        <Typography size="2xl" fontWeight="medium">Build your website</Typography>
        <Typography color="gray-500">Select website</Typography>
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
      <div></div>
      <div class="flex row">
        <a href={null} class="mr-3 text-gray-500 cursor-pointer" on:click={nextStep}>
          <Typography color="gray-600">Skip for now</Typography>
        </a>
        <a href={null} class="flex row items-center cursor-pointer" on:click={handleSubmit}>
          <span class="mr-2"><Typography fontWeight="medium">Start</Typography></span>
          <Icon src={ArrowRight} size="20" class="text-gray-900" solid />
        </a>
      </div>
    </div>
  </form>
</div>
