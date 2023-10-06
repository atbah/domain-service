<script lang="ts">
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import { changeUserProfile } from '$lib/stores/userStore'

  export let skip: () => void
  export let nextStep: () => void

  // TODO: website domains
  let selectedDomain: string;
  const options = ['mybusiness.com', 'championweb.com.au']

  const onSelectOption = (option: string) => {
    selectedDomain = option
  }

  const handleSubmit = () => {
    if (!selectedDomain) {
      toast.push('Please select one of the domains')
    } else {
      changeUserProfile({
        website: selectedDomain
      })
      nextStep()
    }
  }

  const optionStyle = "flex items-center px-6 py-5 rounded rounded-xl cursor-pointer border border-gray-500"
</script>

<form on:submit={handleSubmit}>
  {#each options as option}
    <div class="mb-3">
      <a
        href={null}
        class="{optionStyle} {selectedDomain === option && 'border-2 border-green'}"
        on:click={() => onSelectOption(option)}
      >
        <div class="flex w-[16px] h-[16px] rounded-full border border-gray-500 {selectedDomain === option ? 'bg-primary' : 'bg-white'}">
          {#if selectedDomain === option}
            <div class="m-auto w-[8px] h-[8px] bg-white rounded-full"></div>
          {/if}
        </div>
        <div class="ml-4">
          <Typography fontWeight="medium">{option}</Typography>
        </div>
      </a>
    </div>
  {/each}


  <!-- desktop footer -->
  <div class="row justify-between mt-4 hidden sm:flex">
    <div></div>
    <div class="flex row">
      <a href={null} class="mr-3 text-gray-500 cursor-pointer" on:click={skip}>
        <Typography color="gray-600">Skip for now</Typography>
      </a>
      <a href={null} class="flex row items-center cursor-pointer" on:click={handleSubmit}>
        <span class="mr-2"><Typography fontWeight="medium">Start</Typography></span>
        <Icon src={ArrowRight} size="20" class="text-gray-900" solid />
      </a>
    </div>
  </div>
  <!-- desktop footer -->

  <!-- mobile footer -->
  <div class="fixed bottom-20 left-0 right-0 sm:hidden">
    <div class="flex justify-center">
      <div class="w-64 text-center">
        <Button
          fullwidth
          type="button"
          class="text-white bg-primary hover:bg-primary-300"
          on:click={nextStep}
        >
          <Typography size="default" color="white" fontWeight="medium">Next</Typography>
        </Button>

        <div class="pt-6">
          <a href={null} class="text-gray-500 cursor-pointer" on:click={skip}>
            <Typography color="gray-600">Skip for now</Typography>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- end footer -->
</form>
