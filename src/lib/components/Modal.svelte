<script lang="ts">
	import { Modal, CloseButton } from 'flowbite-svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import Typography from '$lib/components/Form/Typography.svelte';

  export let isOpen: boolean
  export let title: string
</script>

<Modal bind:open={isOpen} dismissable={false} defaultClass="rounded rounded-2xl">
  <div class="flex justify-between">
    <Typography size="2xl" fontWeight="medium">{title}</Typography>
    <CloseButton on:click />
  </div>
  <slot></slot>
</Modal>
