<script lang="ts">
  import { createEventDispatcher } from 'svelte'

	export let active = 0;
	export let items: any[] = [];

	const dispatch = createEventDispatcher();

	const onClickItem = (nextActive: number) => dispatch('change', { active: nextActive });
</script>
  
<ul class="w-100 m-0 p-0 flex justify-center gap-1 dot-nav">
	{#each items as _, i}
		<li class="m-0 p-0">
			<a
        href={null}
        on:click|preventDefault={() => onClickItem(i)}
        class={`block cursor-pointer w-2 h-2 bg-gray-300 active:bg-primary`}
        class:active={active === i}>{''}</a>
		</li>
	{/each}
</ul>

<style>
	.dot-nav li a {
		border-radius: 50%;
		transition: width 100ms ease-in-out;
	}

	.dot-nav li a.active {
		width: 24px;
		border-radius: 8px;
    background-color: #16A34A;
	}
</style>
