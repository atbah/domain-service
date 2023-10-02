<script lang="ts">
  import { Icon, ArrowRight, Trophy, CheckCircle, PlusCircle, MinusCircle  } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import Typography from '$lib/components/Form/Typography.svelte'
  import InputField from '$lib/components/Form/InputField.svelte'
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

  const onChangeEmail = (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    email = value
  }

  const optionStyle = "px-6 py-5 rounded rounded-xl cursor-pointer border border-gray-200"
</script>

<!-- Options & Checkout Start -->
<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Options & Checkout</Typography>
    <Typography color="gray-500">Further instruction in one line</Typography>
  </div>
</div>
<div class="flex items-center justify-between {optionStyle} mb-4">
  <div class="flex items-center">
    <Icon src={Trophy} size="32" />
    <div class="ml-4">
      <Typography fontWeight="medium">{selectedOption.name}</Typography>
      <Typography color="gray-600" fontWeight="sm">{selectedOption.name}</Typography>
    </div>
  </div>
  <div>
    <Typography fontWeight="medium">$9/m</Typography>
  </div>
</div>

<Gallery wrapperClass="gap-2 grid-cols-2 mb-4">
  {#each subscriptionOptions as option}
    <a
      href={null}
      class="{optionStyle} {selectedPlan && selectedPlan.name === option.name && 'border-2 border-green'}"
      on:click={() => onSelectOption(option)}
    >
      <div class="flex justify-between items-center mb-3">
        <Typography fontWeight="medium">{option.name}</Typography>
        <Typography fontWeight="medium">{option.currency}{option.price}/{option.type}</Typography>
      </div>
      <div class="flex justify-between items-center mb-3">
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
  <div class="flex justify-between px-4 border-t border-gray-200">
    <div class="flex-1 py-4">
      <InputField
        md
        type="type"
        name="email"
        inputClass="text-gray-900 rounded-xl border border-gray-200"
        bind:value={email}
        onChange={onChangeEmail}
      />
      <Typography color="gray-200">Choose email name...</Typography>
    </div>
    <div class="flex-1 border-l border-gray-200 pl-4 py-4">
      <Typography>@mybusiness.com.au</Typography>
    </div>
  </div>
</div>
<!-- Options & Checkout End -->

<!-- Payment method Start -->
<div class="flex flex-row justify-between mt-12">
  <div>
    <Typography size="2xl" fontWeight="medium">Payment method</Typography>
    <Typography color="gray-500">You can review your order in the next step before it's final</Typography>
  </div>
</div>
<!-- Payment method End -->

<div class="flex row justify-between mt-4">
  <div>
    <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>Back</a>
  </div>
  <div class="flex row">
    <a href={null} class="flex row items-center cursor-pointer" on:click={handleSubmit}>
      <span class="mr-2"><Typography fontWeight="medium">Next</Typography></span>
      <Icon src={ArrowRight} size="20" class="text-gray-900" solid />
    </a>
  </div>
</div>
