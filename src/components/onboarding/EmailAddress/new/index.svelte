<script lang="ts">
  import { goto } from '$app/navigation'
  import { onboardingStep, changeOnboardingStep } from '$lib/stores/userStore'
  import type { EmailProvider } from '$lib/types'
	import StartStep from './StartStep.svelte'
  import PlanStep from './PlanStep.svelte'
  import CheckoutStep from './CheckoutStep.svelte'
  import OrderStep from './OrderStep.svelte'
	import DotNav from '$lib/components/DotNav.svelte'

	let innerWidth = 0
	let currentStep = 0
	let steps = [
		{
			name: 'Email Provider',
			description: 'Further instruction in one line',
      component: StartStep
		},
		{
			name: 'Pick a plan',
			description: 'Further instruction in one line',
      component: PlanStep
		},
		{
			name: 'Options & Checkout',
			description: 'Further instruction in one line',
      component: CheckoutStep
		},
		{
			name: 'Order summary',
			description: 'Further instruction in one line',
      component: OrderStep
		},
	];

  let selectedOption: EmailProvider

  const nextStep = () => {
    changeOnboardingStep($onboardingStep.currentStep + 1, $onboardingStep.currentStep)
    goto('/onboarding')
  }


  const onSelectOption = (value: EmailProvider) => {
    selectedOption = value
  }

	const onChangeStep = (evt: any) => {
		currentStep = evt.detail.active
	}

	// move steps inside the inner step
	const _onNext = () => {
		if (currentStep === steps.length - 1) {
			nextStep()
		} else {
			currentStep += 1
		}
	}

	const _onPrevious = () => {
		if (currentStep !== 0) {
			currentStep -= 1
		} else {
			// if (previousStep) {
			// 	previousStep()
			// }
		}
	}

	$: isMobile = innerWidth < 640
</script>

<svelte:window bind:innerWidth />

<div class={`flex ${isMobile ? 'w-full' : 'w-164 mx-auto'}`}>
	{#each steps as step, i}
		{#if currentStep === i}
			<div class={`w-full ${isMobile ? 'mt-10 mx-5' : 'mt-32'}`}>
				<svelte:component this={step.component}
					previousStep={_onPrevious}
					nextStep={_onNext}
          {selectedOption}
          onSelect={onSelectOption}
          {isMobile}
				>
				</svelte:component>
			</div>
		{/if}
	{/each}

	<div class="fixed bottom-10 left-0 right-0 sm:hidden">
		<DotNav items={steps} active={currentStep} on:change={onChangeStep} />
	</div>
</div>

