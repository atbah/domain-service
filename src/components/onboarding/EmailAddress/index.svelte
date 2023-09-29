<script lang="ts">
  import { goto } from '$app/navigation'
  import { onboardingStep, changeOnboardingStep } from '$lib/stores/userStore'
  import type { EmailProvider } from '$lib/types'
	import StartStep from './StartStep.svelte'
  import PlanStep from './PlanStep.svelte'
  import CheckoutStep from './CheckoutStep.svelte'
  import OrderStep from './OrderStep.svelte'

  let selectedOption: EmailProvider
	let step: number = 0

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

  const onSelectOption = (value: EmailProvider) => {
    selectedOption = value
  }
</script>


<div class="flex w-160 mx-auto">
  <div class="w-full mt-32">
    {#if step === 0}
      <StartStep previousStep={_onPrevious} nextStep={_onNext} onSelect={onSelectOption} />
    {:else if step === 1}
      <PlanStep previousStep={_onPrevious} nextStep={_onNext} {selectedOption} />
    {:else if step === 2}
      <CheckoutStep previousStep={_onPrevious} nextStep={_onNext} {selectedOption} />
    {:else}
      <OrderStep previousStep={_onPrevious} nextStep={nextStep} {selectedOption} />
    {/if}
  </div>
</div>


