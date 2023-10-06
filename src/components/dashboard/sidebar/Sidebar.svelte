<script>
	import { page } from '$app/stores'
	import { sidebarOpen } from '../store';
	import SidebarItems from './SidebarItems.svelte';
	import SidebarHeader from './SidebarHeader.svelte';
	import SidebarSteps from './SidebarSteps.svelte';
	import SidebarUser from './SidebarUser.svelte';

	const style = {
		mobileOrientation: {
			start: 'left-0',
			end: 'right-0'
		},
		container: `px-6 hidden sm:block`,
		close: `hidden lg:block lg:w-72 lg:z-auto`,
		open: `w-8/12 absolute z-40 sm:w-5/12 lg:hidden`,
		default: `h-full bg-white h-screen overflow-y-auto top-0 lg:relative border-e border-gray-500`
	};

	export let mobileOrientation = 'end';
</script>

<aside
	class={`${style.default} ${style.mobileOrientation[mobileOrientation]}
       ${$sidebarOpen ? style.open : style.close} scrollbar`}
>
	<div class={style.container}>
		<SidebarHeader />
		{#if $page.url.pathname === '/onboarding'}
			<SidebarSteps />
		{:else}
			<SidebarItems />
		{/if}

	</div>
	
	<SidebarUser />
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
