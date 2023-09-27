<script>
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import {page} from '$app/stores'
	import Layout from '@components/dashboard/Layout.svelte'

	const options = {
		duration: 8000,
		pausable: true,
		reversed: true,
		intro: { y: -192 },
	}
</script>

<SvelteToast {options} />

<Layout>
	<slot />
</Layout>