<script>
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import Layout from '@components/dashboard/Layout.svelte'
	import '../styles/font.css'

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