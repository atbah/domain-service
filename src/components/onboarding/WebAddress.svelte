<script lang="ts">
  import { createForm } from 'svelte-forms-lib'
  import * as yup from 'yup'
  import { Icon, ArrowRight } from 'svelte-hero-icons'
  import InputField from '$lib/components/atoms/Form/InputField.svelte'
  import RoundLabel from '$lib/components/atoms/Form/RoundLabel.svelte'
  import Typography from '$lib/components/atoms/Form/Typography.svelte'
  import Button from '$lib/components/atoms/Form/Button.svelte'
  import { user, changeUserProfile, changeOnboardingStep } from '$lib/stores/userStore'

  export let previousStep: () => void
  export let nextStep: () => void

  const formFields = [
    {
      name: 'businessName',
      type: 'text',
      label: 'Business Name'
    },
    {
      name: 'registrationDate',
      type: 'date',
      label: 'Registration Date'
    },
    {
      name: 'renewalDate',
      type: 'date',
      label: 'Renewal Date'
    }
  ]
  const _intializeValues = () => {
    return {
      businessName: '',
      registrationDate: null,
      renewalDate: null
    }
  }

  const schema = yup.object().shape({
  })

  const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: _intializeValues(),
		// validationSchema: schema,
		onSubmit: async (params) => {
      changeUserProfile(params)
      nextStep()
		},
	})
</script>

<div class="flex w-164 mx-auto">
  <form class="w-full mt-32" on:submit={handleSubmit}>
    <div class="flex flex-row justify-between mb-4">
      <div>
        <Typography size="2xl">Web Address</Typography>
        <Typography color="gray-500">Further instruction in one line.</Typography>
      </div>

      <div>
        <RoundLabel type="success" text="Registered" />
      </div>
    </div>
    <!-- {#each formFields as field}
      <div class="mb-2">
        <InputField
          md
          type={field.type}
          name={field.name}
          label={field.label}
          inputClass="rounded-xl border border-gray-500"
          error={$errors[field.name]}
          bind:value={$form[field.name]}
          onChange={handleChange}
        />
      </div>
    {/each} -->

    <div class="flex row justify-between items-center mt-4">
      <div>
        <a href={null} class="text-gray-500 cursor-pointer" on:click={previousStep}>Back</a>
      </div>

      <div class="flex row">
        <a href={null} class="mr-3 text-gray-500 cursor-pointer" on:click={nextStep}>Skip for now</a>
        <a href={null} class="flex row items-center cursor-pointer" on:click={handleSubmit}>
          <span class="mr-2">Start</span>
          <Icon src={ArrowRight} size="14" />
        </a>
      </div>
    </div>
  </form>
</div>
