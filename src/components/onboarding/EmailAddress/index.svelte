<script lang="ts">
	import { onMount } from 'svelte'
  import { sineIn } from 'svelte/easing'
  import { Drawer } from 'flowbite-svelte'
  import { goto } from '$app/navigation'
  import RoundLabel from '$lib/components/Form/RoundLabel.svelte'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import UpdateEmailAddress from '@components/onboarding/EmailAddress/update/index.svelte'
  import type { EmailAddress } from '$lib/types'
  import { TEST_EMAIL_ADDRESSES } from '$lib/data/data'

  let hideDrawer = true;
  let transitionParams = {
    x: 320,
    duration: 200,
    easing: sineIn
  };
  let addresses: EmailAddress[] = [];

  onMount(async () => {
    // TODO: fetch email addresses from backend
    const getData = () => {
      return TEST_EMAIL_ADDRESSES
    }

    addresses = getData()
  })

  const _toggleDrawer = () => {
    hideDrawer = !hideDrawer
  }

  const gotoNewEmail = () => {
    goto('/new-email-address')
  }


  const onClickManagePlan = () => {
    _toggleDrawer()
  }
</script>

<Drawer
  placement="right"
  transitionType="fly"
  {transitionParams}
  width="512"
  bind:hidden={hideDrawer}
  id="email-address-drawer"
>
  <UpdateEmailAddress closeModal={_toggleDrawer} />
</Drawer>

<div class="mx-4">
  <div class="w-full mt-8">
    <div class="rounded-xl border border-gray-100">
      <div class="px-5 py-5 pb-4 flex items-center border-b border-gray-100">
        <div>
          <img src="/images/icons/GoogleLogo1.svg" alt="google" />
        </div>

        <div class="flex-1 ml-4">
          <div class="flex items-center justify-between">
            <div>
              <Typography fontWeight="medium">Google Workspace</Typography>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <Typography color="gray-600" fontWeight="sm">30 GB storage</Typography>
                  <div class="mx-1">
                    <Typography color="gray-500" fontWeight="sm">∙</Typography>
                  </div>
                  <Typography color="primary" fontWeight="sm">3 seats</Typography>
                </div>
              </div>
            </div>

            <Button
              md
              type="button"
              class="text-white bg-white hover:bg-gray-300 border border-gray-200"
              on:click={onClickManagePlan}
            >
              <Typography fontWeight="medium">Manage Plan</Typography>
            </Button>
          </div>
        </div>
      </div>

      {#each addresses as address, i}
        <div class={`p-5 ${i !== 0 && 'border-t border-gray-100'}`}>
          <div class="flex items-center">
            <div class="flex flex-1 items-center">
              <div class="flex-1">
                <Typography size="2xl">{address.email}</Typography>
                <Typography color="gray-500">{address.username || ''}</Typography>
              </div>
    
              <div class="flex-1">
                <Typography color="gray-700">{address.storage}</Typography>
              </div>
    
              <div class="flex-1">
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
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-4">
      <Button
        md
        type="button"
        class="text-white bg-primary hover:bg-primary-300"
        on:click={gotoNewEmail}
      >
        <Typography color="white">Add Web Address</Typography>
      </Button>
    </div>
  </div>
</div>
