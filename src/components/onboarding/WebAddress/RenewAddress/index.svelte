<script lang="ts">
  import { goto } from '$app/navigation'
  import { onboardingStep, changeOnboardingStep } from '$lib/stores/userStore'
  import type { EmailProvider } from '$lib/types'
  import SelectionStep from "./SelectionStep.svelte"
  import DurationStep from "./DurationStep.svelte"
  import FinalStep from "./FinalStep.svelte"
	import DotNav from '$lib/components/DotNav.svelte'

  let domain: string = 'mybusiness.com'
	
  const nextStep = () => {
    changeOnboardingStep($onboardingStep.currentStep + 1, $onboardingStep.currentStep)
    goto('/onboarding')
  }

  const onCancel = () => {
    goto('/onboarding')
  }

  const setDomain = (value: string) => {
    domain = value
  }

	let innerWidth = 0
	let currentStep = 0
	let steps = [
		{
			name: 'Renew Web Address',
			description: 'Further instruction in one line',
      component: SelectionStep
		},
		{
			name: 'Duration',
			description: 'Further instruction in one line',
      component: DurationStep
		},
		{
			name: 'FinalStep',
			description: 'Further instruction in one line',
      component: FinalStep
		},
	];

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
			onCancel()
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
				>
				</svelte:component>
			</div>
		{/if}
	{/each}

	<div class="fixed bottom-10 left-0 right-0 sm:hidden">
		<DotNav items={steps} active={currentStep} on:change={onChangeStep} />
	</div>
</div>
