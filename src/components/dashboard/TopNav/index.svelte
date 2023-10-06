<script lang="ts">
  import { Icon, ArrowLeft, ArrowRight } from 'svelte-hero-icons'
  import { page } from '$app/stores'
  import { StepStore } from '$lib/components/StepWizard'
	import { onboardingStep, changeOnboardingStep } from '$lib/stores/userStore'

  const onboardingUrls = [
    '/new-address',
    '/new-email-address',
    '/renew-address'
  ]

  const { step, gotoStep } = StepStore

  const onPrevious = () => {
    changeOnboardingStep($step - 1, $step)
  }

  const onNext = () => {
    changeOnboardingStep($step + 1, $step)
  }

  $: isEditPage = onboardingUrls.includes($page.url.pathname)
  $: isOnboarding = $page.url.pathname === '/onboarding'
</script>

<div class="w-full bg-white block sm:hidden sticky top-0 px-5 pt-8 pb-4 z-10">
  {#if isEditPage}
    <div class="flex justify-between items-center">
      <a href="/" class="w-10 h-10 flex rounded-full bg-gray-300 hover:bg-gray-500">
        <Icon src={ArrowLeft} size="20" class="m-auto" />
      </a>
      <a href="/">
        <img src="/images/icons/logo.svg" alt="logo" />
      </a>
    </div>
  {:else if isOnboarding}
    <div class="flex justify-between items-center">
      <a
        href={null}
        class="w-10 h-10 flex rounded-full bg-gray-300 hover:bg-gray-500"
        on:click={onPrevious}
      >
        <Icon src={ArrowLeft} size="20" class="m-auto" />
      </a>
      <a href="/">
        <img src="/images/icons/logo.svg" alt="logo" />
      </a>
      {#if isOnboarding}
        <a
          href={null}
          class="w-10 h-10 flex rounded-full bg-gray-300 hover:bg-gray-500"
          on:click={onNext}
        >
          <Icon src={ArrowRight} size="20" class="m-auto" />
        </a>
      {/if}
    </div>
  {:else}
    <a href="/">
      <img src="/images/icons/logo.svg" alt="logo" />
    </a>
  {/if}
</div>