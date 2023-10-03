<script lang="ts">
  import { goto } from '$app/navigation'
  import { Icon, ArrowLeft } from 'svelte-hero-icons'
  import Typography from '$lib/components/Form/Typography.svelte'
  import { onboardingStep, changeOnboardingStep } from '$lib/stores/userStore'
  import SelectionStep from "./SelectionStep.svelte"
  import DurationStep from "./DurationStep.svelte"
  import FinalStep from "./FinalStep.svelte"

  let domain: string = 'mybusiness.com'
	let step = 0

  const nextStep = () => {
    changeOnboardingStep($onboardingStep.currentStep + 1, $onboardingStep.currentStep)
    goto('/onboarding')
  }

	// move steps inside the inner step
	const _onNext = () => {
		step = step + 1
	}

	const _onPrevious = () => {
		step = step - 1
	}

  const onCancel = () => {
    goto('/onboarding')
  }

  const setDomain = (value: string) => {
    domain = value
  }
</script>


<div class="flex w-140 mx-auto">
  <div class="w-full mt-32">
    <div class="inline-block mb-10 p-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-200 cursor-pointer">
      <div class="flex row">
        <a href={null} class="flex row items-center cursor-pointer" on:click={onCancel}>
          <Icon src={ArrowLeft} size="16" class="text-gray-900" solid />
          <span class="ml-2">
            <Typography fontWeight="medium">Cancel</Typography>
          </span>
        </a>
      </div>
    </div>

    {#if step === 0}
      <SelectionStep previousStep={_onPrevious} nextStep={_onNext} onChange={setDomain} />
    {:else if step === 1}
      <DurationStep domain={domain} previousStep={_onPrevious} nextStep={_onNext} />
    {:else}
      <FinalStep previousStep={_onPrevious} nextStep={nextStep} />
    {/if}
  </div>
</div>


