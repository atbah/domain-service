<script lang="ts">
  import { StepWizard, Step, StepStore } from '$lib/components/atoms/StepWizard'
	import { onboardingStep, changeOnboardingStep } from '$lib/stores/userStore'
	import BusinessRegistration from '@components/onboarding/BusinessRegistration.svelte'
	import WebAddress from '@components/onboarding/WebAddress.svelte'
	import Website from '@components/onboarding/Website.svelte'
	import EmailAddress from '@components/onboarding/EmailAddress.svelte'
	import Xero from '@components/onboarding/Xero.svelte'

	const { step, gotoStep } = StepStore

	const onPrevious = () => {
		changeOnboardingStep($step - 1, $step)
	}

	const onNext = () => {
		changeOnboardingStep($step + 1, $step)
	}

	onboardingStep.subscribe((step) => {
		if (step.currentStep != $step) {
			gotoStep(step.currentStep)
		}
	});
</script>

<StepWizard initialStep={$onboardingStep?.currentStep}>
  <Step num={0}>
		<BusinessRegistration nextStep={onNext} />
	</Step>
	<Step num={1}>
		<WebAddress previousStep={onPrevious} nextStep={onNext} />
	</Step>
	<Step num={2}>
		<Website previousStep={onPrevious} nextStep={onNext} />
	</Step>
	<Step num={3}>
		<EmailAddress previousStep={onPrevious} nextStep={onNext} />
	</Step>
	<Step num={4}>
		<Xero previousStep={onPrevious} />
	</Step>
</StepWizard>
