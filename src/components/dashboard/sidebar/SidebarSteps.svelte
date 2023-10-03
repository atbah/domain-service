<script lang="ts">
	import RegisterStepper from '@components/RegisterStepper.svelte'

	const username: string = 'Edward'
</script>

<div class={`mb-6`}>
	<h4 class="h4">Welcome, {username}</h4>
	<div class="text-gray-600">Let's set up your account</div>
</div>

<div class="mt-12">
	<RegisterStepper />
</div>
