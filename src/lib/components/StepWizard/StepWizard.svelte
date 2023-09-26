<script lang="ts">
	import { setContext } from 'svelte'
	import { step, nextStep, previousStep, gotoStep } from './store'

	export let initialStep = 1
	
	gotoStep(initialStep)
	
	setContext('StepWizard', {
		step,
		nextStep,
		previousStep
	})
</script>

<slot nextStep={nextStep} previousStep={previousStep}></slot>
