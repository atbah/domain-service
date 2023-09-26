<script lang="ts">
  import { createForm } from 'svelte-forms-lib'
  import * as yup from 'yup'
  import InputField from '$lib/components/atoms/Form/InputField.svelte'
  import RoundLabel from '$lib/components/atoms/Form/RoundLabel.svelte'
  import Typography from '$lib/components/atoms/Form/Typography.svelte'
  import Button from '$lib/components/atoms/Form/Button.svelte'
  import { changeUserProfile } from '$lib/stores/userStore'

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
    businessName: yup.string().required('This is a required field'),
    registrationDate: yup.string().required('This is a required field'),
    renewalDate: yup.string().required('This is a required field'),
  })

  const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: _intializeValues(),
		// validationSchema: null, // schema,
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
        <Typography size="2xl">Business Registration</Typography>
        <Typography color="gray-500">Further instruction in one line.</Typography>
      </div>

      <div>
        <RoundLabel type="success" text="Registered" />
      </div>
    </div>
    {#each formFields as field}
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
    {/each}

    <div class="mt-4">
      <Button
        md
        fullwidth
        type="submit"
        class="border border-gray-500  hover:bg-gray-100"
      >
        Renew Business Name
      </Button>
    </div>
  </form>
</div>
