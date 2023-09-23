<script lang="ts">
	import { getContext } from 'svelte'
    import type { WizardProps } from '$lib/components/types'

	export let num: number;
	
	const getStepWizardContext = (): WizardProps => {
		const context: WizardProps = getContext('StepWizard')
		// if (!context) {
		// 	throw new Error('Cannot be rendered outside the Wizard component')
		// }
		return context
	}
	
	const { step, nextStep, previousStep }: WizardProps = getStepWizardContext()
</script>

{#if $step === num}
	<slot nextStep={nextStep} previousStep={previousStep}></slot>	
{/if}
