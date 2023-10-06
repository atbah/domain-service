<script lang="ts">
  import { goto } from '$app/navigation'
  import { onboardingStep, changeOnboardingStep } from '$lib/stores/userStore'
  import { Icon, ArrowLeft } from 'svelte-hero-icons'
  import type { EmailProvider } from '$lib/types'
  import Typography from '$lib/components/Form/Typography.svelte'
  import SearchStep from "./SearchStep.svelte"
  import SelectionStep from "./SelectionStep.svelte"
  import AddonStep from "./AddonStep.svelte"
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
			name: 'Search for a web Address',
			description: 'Check web address name availability and secure yours now',
      component: SearchStep
		},
		{
			name: 'The web address is available!',
			description: 'Further instruction in one line',
      component: SelectionStep
		},
		{
			name: 'Duration and Add-ons!',
			description: 'Further instruction in one line',
      component: AddonStep
		},
    {
			name: '',
			description: '',
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

<div class={`flex ${isMobile ? 'w-full' : 'w-140 mx-auto'}`}>
	{#each steps as step, i}
		{#if currentStep === i}
			<div class={`w-full ${isMobile ? 'mt-10 mx-5' : 'mt-32'}`}>
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
