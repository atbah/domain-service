<script lang="ts">
	import RegisterStepper from '@components/RegisterStepper.svelte'

	const username: string = 'Edward'
</script>

<div class={`pl-6 mb-6`}>
	<h4 class="h4">Welcome, {username}</h4>
	<div class="text-gray-600">Let's set up your account</div>
</div>

<div class="mt-16">
	<RegisterStepper />
</div>
