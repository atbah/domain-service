<script lang="ts">
  import { createForm } from 'svelte-forms-lib'
  import * as yup from 'yup'
  import InputField from '$lib/components/Form/InputField.svelte'
  import RoundLabel from '$lib/components/Form/RoundLabel.svelte'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import Modal from '$lib/components/Modal.svelte'
  import { changeUserProfile } from '$lib/stores/userStore'

  export let nextStep: () => void

  interface FormData {
    businessName: string;
    registrationDate: Date;
    renewalDate: Date;
  }

  let data: FormData;
  let showModal: boolean = false

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
    registrationDate: yup.date().required('This is a required field'),
    renewalDate: yup.date().required('This is a required field'),
  })

  const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: _intializeValues(),
		// validationSchema: null, // schema,
		onSubmit: async (params: FormData) => {
      data = params
      onToggleModal()
		},
	})

  const onToggleModal = () => {
    showModal = !showModal
  }

  const moveToNext = () => {
    changeUserProfile(data)
    nextStep()
  }
</script>

<div class="max-w-164 mx-4">
  <form class="w-full mt-32" on:submit={handleSubmit}>
    <div class="flex flex-row justify-between mb-4">
      <div>
        <Typography size="2xl" fontWeight="medium">Business Registration</Typography>
        <Typography color="gray-500">Further instruction in one line.</Typography>
      </div>

      <div>
        <RoundLabel type="success" text="Registered" />
      </div>
    </div>
    {#each formFields as field}
      <div class="mb-3">
        <InputField
          md
          type={field.type}
          name={field.name}
          label={field.label}
          inputClass="text-gray-900 rounded-xl border border-gray-200"
          error={$errors[field.name]}
          bind:value={$form[field.name]}
          onChange={handleChange}
        />
      </div>
    {/each}

    <Button
      md
      type="submit"
      class="mt-2 text-gray-900 border border-gray-200 hover:bg-gray-100"
    >
      Renew Business Name
    </Button>
  </form>
</div>

<Modal title="Business Name Renewal" isOpen={showModal} on:click={onToggleModal}>
  <p class="text-gray-700">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  </p>
  <div class="w-full flex mt-12">
    <Button
      fullwidth
      type="button"
      class="mr-5 text-gray-900 border border-gray-200 hover:bg-gray-100"
      on:click={onToggleModal}
    >
      <Typography color="gray-900" fontWeight="medium">Cancel</Typography>
    </Button>
    <Button
      fullwidth
      type="button"
      class="text-white bg-primary hover:bg-primary-300"
      on:click={moveToNext}
    >
      <Typography color="white" fontWeight="medium">Renew Business Name</Typography>
    </Button>
  </div>
</Modal>