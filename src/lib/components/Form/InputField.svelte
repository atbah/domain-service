<script lang="ts">
	import Typography from '$lib/components/Form/Typography.svelte'
	import type { OnChangeFuncProps } from '$lib/components/types'

	export let id: string | null = null
	export let type = ''
	export let label = ''
	export let placeholder = ' '
	export let value: string | number = ''
	export let aftertext = ''
	export let name: string | null = null
	export let required: boolean | null = null
	export let disabled: boolean | null = null
	export let error: string | boolean = '' || false
	export let sm = false
	export let md = false
	export let lg = false
	export let inputClass: string | null = null
	export let wrapperClass: string | null = null

	$: labelClasses = [error ? 'bg-error/20 rounded-md' : '', 'w-full'].join(' ')

	$: classes = [
		type !== 'checkbox' ? 'input input-bordered' : 'checkbox',
		sm ? 'input-sm' : '',
		md ? 'input-md' : '',
		lg ? 'input-lg' : '',
		error ? 'input-error' : '',
		inputClass,
		'w-full'
	].join(' ')

	export let onChange: OnChangeFuncProps | undefined = undefined

	const handleInput = (e: Event) => {
		value = (e.target as HTMLInputElement).value

		if (onChange) {
			onChange(e)
		}
	}
</script>

<div class="{wrapperClass} form-control field">
	<label class={labelClasses}>
		{#if label}
			<Typography size={'base'} color="gray-700" fontWeight="sm">{label}</Typography>
		{/if}
		<input {id} {type} {value} {placeholder} {required} {disabled} {name} class={classes} on:change={handleInput} />
		{#if aftertext}
			<span class="absolute bottom-2 right-7 bg-slate-700 px-2 rounded-full">{aftertext}</span>
		{/if}
	</label>
	{#if error}
		<div class="text-sm text-red">{error}</div>
	{/if}
</div>

