<script lang="ts">
  import { Icon, ArrowRight, Trophy, CheckCircle, PlusCircle, MinusCircle  } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import Typography from '$lib/components/Form/Typography.svelte'
  // import InputField from '$lib/components/Form/InputField.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import Gallery from '$lib/components/Gallery.svelte'
  import Tag from '$lib/components/Tag.svelte'
  import { changeUserProfile } from '$lib/stores/userStore'
  import type { EmailProvider, EmailProviderPlan } from '$lib/types';

  export let previousStep: () => void
  export let nextStep: () => void
  export let selectedOption: EmailProvider

  // TODO: website domains
  let selectedPlan: EmailProviderPlan;
  const subscriptionOptions: EmailProviderPlan[] = [
    {
      name: 'Monthly',
      description: 'Billed montly',
      price: 9,
      type: 'm',
      currency: '$'
    },
    {
      name: 'Annual',
      description: 'Billed annually',
      price: 99,
      type: 'yr',
      currency: '$',
      extra: '1 month free'
    },
  ]

  const onSelectOption = (option: EmailProviderPlan) => {
    selectedPlan = option
  }

  const handleSubmit = () => {
    if (!selectedPlan) {
      toast.push('Please select one of the domains')
    } else {
      // changeUserProfile({
      //   website: selectedPlan
      // })
      nextStep()
    }
  }

  let seats: number = 1
  let email: string = ''

  const onChangeSeat = (value: number) => {
    const newDuration = seats + value
    if (newDuration < 1) {
      return
    }
    seats += value
  }

  const optionStyle = "px-5 py-4 rounded rounded-xl cursor-pointer border border-gray-200"
</script>

<!-- Options & Checkout Start -->
<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Manage Plan</Typography>
    <Typography color="gray-500">Further instruction in one line</Typography>
  </div>
</div>
<div class="flex items-center justify-between {optionStyle} mb-4">
  <div class="flex items-center">
    <div>
      <img src="/images/icons/GoogleLogo1.svg" alt="google" />
    </div>

    <div class="ml-4">
      <Typography size="default" fontWeight="medium">{selectedOption.name}</Typography>
      <Typography color="gray-600" fontWeight="sm">{selectedOption.name}</Typography>
    </div>
  </div>
  <div>
    <Typography size="default" fontWeight="medium">$9/m</Typography>
  </div>
</div>

<Gallery wrapperClass="gap-2 grid-cols-2 mb-4">
  {#each subscriptionOptions as option}
    <a
      href={null}
      class="{optionStyle} {selectedPlan && selectedPlan.name === option.name && 'border-2 border-green'}"
      on:click={() => onSelectOption(option)}
    >
      <div class="flex justify-between items-center mb-2">
        <Typography fontWeight="medium">{option.name}</Typography>
        <Typography fontWeight="medium">{option.currency}{option.price}/{option.type}</Typography>
      </div>
      <div class="flex justify-between items-center">
        <Typography  color="gray-600" size="xs" fontWeight="medium">{option.description}</Typography>
        {#if option.extra}
          <Tag>
            <Typography  color="primary" size="xs" fontWeight="medium">{option.extra}</Typography>
          </Tag>
        {/if}
      </div>
    </a>
  {/each}
</Gallery>

<div class="bg-white rounded-xl mx-1 border border-gray-200">
  <div class="flex justify-between items-center p-4">
    <div class="flex-1">
      <Typography>Number of seats</Typography>
    </div>
    <div class="flex items-center">
      <a href={null} class={`cursor-pointer`} on:click={() => onChangeSeat(-1)}>
        <Icon src={MinusCircle} class={`${seats === 1 ? 'text-gray-400' : 'text-gray-900'}`} size="20" solid={seats === 1} />
      </a>
    </div>
    <div class="mx-3 pointer-events-none">
      <Typography>{seats} seat</Typography>
    </div>
    <a href={null} class="cursor-pointer" on:click={() => onChangeSeat(1)}>
      <Icon src={PlusCircle} class="text-gray-900" size="20" />
    </a>
  </div>
</div>
<!-- Options & Checkout End -->

<!-- footer navigation -->
<div class="absolute right-8 bottom-8">
  <div class="flex row justify-between">
    <div></div>
    <div class="flex items-center cursor-pointer">
      <a href={null} class="mr-4" on:click={previousStep}>
        <Typography fontWeight="medium">Cancel</Typography>
      </a>
      <Button
        fullwidth
        type="button"
        class="px-4 py-2.5 text-white bg-primary hover:bg-primary-300"
        on:click={nextStep}
      >
        <Typography color="white" fontWeight="medium">Next: Payment Details</Typography>
      </Button>
    </div>
  </div>
</div>
