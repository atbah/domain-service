<script lang="ts">
  import { Icon, ArrowRight, Trophy } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Gallery from '$lib/components/Gallery.svelte'
  import { changeUserProfile } from '$lib/stores/userStore'
  import type { EmailProvider } from '$lib/types'
  import { TEST_EMAIL_PROVIDERS } from '$lib/data/data'
	import { onMount } from 'svelte';

  export let previousStep: () => void
  export let nextStep: () => void
  export let onSelect: (provider: EmailProvider) => void

  // TODO: website domains
  let selectedOption: EmailProvider;
  let options: EmailProvider[] = []

  onMount(() => {
    const fetchEmailProviders = () => {
      return TEST_EMAIL_PROVIDERS
    }

    options = fetchEmailProviders()
  })

  const onSelectOption = (option: EmailProvider) => {
    selectedOption = option

    onSelect(option)
  }

  const handleSubmit = () => {
    if (!selectedOption) {
      toast.push('Please select one of the option')
    } else {
      //TODO: select email provider

      nextStep()
    }
  }

  const optionStyle = "flex items-center px-6 py-5 rounded rounded-xl cursor-pointer border border-gray-500"
</script>

<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Email Provider</Typography>
    <Typography color="gray-500">Further instruction in one line</Typography>
  </div>
  
  <a href={null}>
    <Typography color="primary">See difference</Typography>
  </a>

</div>
<Gallery wrapperClass="gap-2 grid-cols-2">
  {#each options as option}
    <a
      href={null}
      class="{optionStyle} {selectedOption && selectedOption.name === option.name && 'border-2 border-green'}"
      on:click={() => onSelectOption(option)}
    >
      <div class="flex justify-between items-center">
        <div class="mr-5">
          <Typography fontWeight="medium">{option.name}</Typography>
          <Typography color="gray-500" size="sm" fontWeight="medium">{option.description}</Typography>
        </div>

        <!-- TODO: replace this with svg icons later-->
        <Icon src={Trophy} size="32" />
      </div>
    </a>
  {/each}
</Gallery>

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
