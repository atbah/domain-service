<script lang="ts">
	import Typography from '$lib/components/Form/Typography.svelte'
	import DotNav from '$lib/components/DotNav.svelte'
	import SelectDomainStep from './SelectDomainStep.svelte'
	import CompleteStep from './FinalStep.svelte'

	// export let previousStep: () => void
	export let nextStep: () => void

	let innerWidth = 0
	let currentStep = 0
	let steps = [
		{
			name: 'Build your website',
			description: 'Select website',
			component: SelectDomainStep,
		},
		{
			name: 'Your website is ready!',
			description: 'Further instruction in one line',
			component: CompleteStep,
		},
		// {
		// 	name: 'Email Provider',
		// 	description: 'Further instruction in one line'
		// },
		// {
		// 	name: 'Pick a plan',
		// 	description: 'Further instruction in one line'
		// },
		// {
		// 	name: 'Pick a plan',
		// 	description: 'Further instruction in one line'
		// },
		// {
		// 	name: 'Options & Checkout',
		// 	description: 'Further instruction in one line'
		// },
		// {
		// 	name: 'Order summary',
		// 	description: 'Further instruction in one line'
		// },
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
				<div class="flex flex-row justify-between mb-4">
					<div>
						<Typography size="2xl" fontWeight="medium">{step.name}</Typography>
						<Typography color="gray-500">{step.description}</Typography>
					</div>
				</div>

				<svelte:component this={step.component}
					previousStep={_onPrevious}
					nextStep={_onNext}
					skip={nextStep}
				>
				</svelte:component>
			</div>
		{/if}
	{/each}

	<div class="fixed bottom-10 left-0 right-0 sm:hidden">
		<DotNav items={steps} active={currentStep} on:change={onChangeStep} />
	</div>
</div>
