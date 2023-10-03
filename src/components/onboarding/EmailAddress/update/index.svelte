<script lang="ts">
  import { Icon, XMark } from 'svelte-hero-icons'
  import type { EmailProvider } from '$lib/types'
  import CheckoutStep from './CheckoutStep.svelte'
  import OrderStep from './OrderStep.svelte'
  import { TEST_EMAIL_PROVIDERS } from '$lib/data/data'

  export let closeModal: () => void;
  let selectedOption: EmailProvider = TEST_EMAIL_PROVIDERS[0]
	let step: number = 0

	// move steps inside the inner step
	const _onNext = () => {
		step = step + 1
	}

	const _onPrevious = () => {
		step = step - 1
	}

  const onConfirm = () => {
    // TODO: show modal
    
    closeModal()
  }
</script>


<div class="p-4">
  <div class="w-112">
    <a href={null} class="cursor-pointer" on:click={closeModal}>
      <Icon src={XMark} size="24" />
    </a>

    <div class="mt-12">
      {#if step === 0}
        <CheckoutStep previousStep={closeModal} nextStep={_onNext} {selectedOption} />
      {:else}
        <OrderStep previousStep={_onPrevious} nextStep={onConfirm} {selectedOption} />
      {/if}
    </div>
  </div>
</div>
