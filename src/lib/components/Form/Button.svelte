<script lang="ts">
	export let outline = false
	export let sm = false
	export let md = false
	export let lg = false
	export let calendar = false
	export let fullwidth = false
	export let clear = false
	// export let class = ''
</script>

<button
	on:click
	type="button"
	{...$$restProps}
	class={`${fullwidth && 'w-full'} p-3 rounded rounded-xl btn ${$$restProps.class}`}
	class:btn-fullwidth={fullwidth}
	class:btn-outline={outline}
	class:btn-sm={sm}
	class:btn-md={md}
	class:btn-lg={lg}
	class:btn-calendar={calendar}
	class:btn-clear={clear}
>
	<slot />
</button>
