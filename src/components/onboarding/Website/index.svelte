<script lang="ts">
	import SelectDomainStep from './SelectDomainStep.svelte'
	import CompleteStep from './FinalStep.svelte'

	export let previousStep: () => void
	export let nextStep: () => void

	let step = 1

	// move steps inside the inner step
	const _onNext = () => {
		step = step + 1
	}

	const _onPrevious = () => {
		step = step - 1
	}

</script>

{#if step == 0}
	<SelectDomainStep nextStep={_onNext} skip={nextStep} />
{:else}
	<CompleteStep previousStep={_onPrevious} nextStep={nextStep} />
{/if}
