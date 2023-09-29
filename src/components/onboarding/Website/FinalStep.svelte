<script lang="ts">
  import { createForm } from 'svelte-forms-lib'
  import * as yup from 'yup'
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import { toast } from '@zerodevx/svelte-toast'
  import InputField from '$lib/components/Form/InputField.svelte'
  import RoundLabel from '$lib/components/Form/RoundLabel.svelte'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import { user } from '$lib/stores/userStore'

  export let previousStep: () => void
  export let nextStep: () => void

  const onViewWebsite = () => {
    console.log($user?.profile?.website)
  }
</script>

<div class="flex w-164 mx-auto">
  <div class="w-full mt-32">
    <div class="flex flex-row justify-between mb-4">
      <div>
        <Typography size="2xl" fontWeight="medium">Your website is ready!</Typography>
        <Typography color="gray-500">Further instruction in one line</Typography>
      </div>
    </div>

    <div class="p-4 bg-primary rounded-2xl">
      <div class="flex justify-between items-center">
        <div class="max-w-96">
          <Typography size="xl" color="white" fontWeight="medium">Your website is not ready to go.</Typography>
          <Typography color="white">Further instruction in one line.{'\n'}Further instruction in one line.</Typography>
        </div>

        <Button
          md
          type="button"
          class="mr-5 border border-gray-200 bg-white hover:bg-gray-100"
          on:click={onViewWebsite}
        >
          <Typography color="black" fontWeight="medium">Visit Website</Typography>
        </Button>
      </div>
    </div>
  
    <div class="flex row justify-between mt-4">
      <div>
        <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>Back</a>
      </div>
      <div class="flex row">
        <a href={null} class="flex row items-center cursor-pointer" on:click={nextStep}>
          <span class="mr-2"><Typography fontWeight="medium">Start</Typography></span>
          <Icon src={ArrowRight} size="20" class="text-gray-900" solid />
        </a>
      </div>
    </div>
  </div>
</div>
