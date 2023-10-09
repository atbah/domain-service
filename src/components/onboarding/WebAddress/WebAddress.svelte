<script lang="ts">
	import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import RoundLabel from '$lib/components/Form/RoundLabel.svelte'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import { user, changeUserProfile, changeOnboardingStep } from '$lib/stores/userStore'
  import { formatDate } from '$lib/utils/functions'
  import type { Domain } from '$lib/types'
  import { TEST_WEB_ADDRESSES } from '$lib/data/data'

  export let previousStep: () => void
  export let nextStep: () => void

  let addresses: Domain[] = [];

  onMount(async () => {
    // TODO: fetch domains from backend
    const getDomains = () => {
      return TEST_WEB_ADDRESSES
    }

    addresses = getDomains()
  })

  const toggleNewAddressForm = () => {
    goto('/new-address')
  }

  const gotoRenewAddress = () => {
    goto('/renew-address')
  }

  const convertDateToString = (value: any) => {
    return formatDate(value)
  }
</script>

<div class="mx-4">
  <div class="w-full mt-8">
    {#each addresses as address}
      <div class="rounded-xl p-5 border-2 border-gray-500 mb-3">
        <div class="flex flex-col sm:flex-row items-start sm:items-center">
          <div class=" flex-1 flex flex-col sm:flex-row items-start sm:items-center">
            <div class="flex-1 mb-2 sm:mb-0">
              <Typography size="xl">{address.domain}</Typography>
              <Typography  size="sm" color="gray-500">{address.description || ''}</Typography>
            </div>
  
            <div class="flex-1 text-center mb-2 sm:mb-0">
              <Typography color="gray-700">{convertDateToString(address.expires_at)}</Typography>
            </div>
  
            <div class="flex-1 text-center mb-2 sm:mb-0">
              <div class="inline-block">
                {#if address.status == 'Active'}
                  <RoundLabel type="success" text={address.status} />
                {:else if address.status == 'Expiring Soon'}
                  <RoundLabel type="warning" text={address.status} />
                {:else}
                  <RoundLabel type="error" text={address.status} />
                {/if}
              </div>
            </div>
          </div>

          <div class="w-48">
            {#if address.status !== 'Active'}
              <div class="flex items-center  mt-4 sm:mt-0">
                <Button
                  md
                  type="button"
                  class="text-white bg-primary hover:bg-primary-300"
                  on:click={gotoRenewAddress}
                >
                  <Typography color="white">Renew Now</Typography>
                </Button>
                <a href={null} class="ml-3">
                  <Typography color="gray-500">Let lapse</Typography>
                </a>
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/each}

    <div class="mt-4">
      <Button
        md
        type="button"
        class="text-white bg-primary hover:bg-primary-300"
        on:click={toggleNewAddressForm}
      >
        <Typography color="white">Add Web Address</Typography>
      </Button>
    </div>
  </div>
</div>
