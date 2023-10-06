<script lang="ts">
  import { Icon, ArrowRight, Check } from 'svelte-hero-icons'
  import { createForm } from 'svelte-forms-lib'
  import * as yup from 'yup'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
  import InputField from '$lib/components/Form/InputField.svelte'
  import BillingPlan from './BillingPlan.svelte'
  import BillingPaymentMethod from './BillingPaymentMethod.svelte'
  import BillingABN from './BillingABN.svelte'

  let billingContact: string;

  const formFields = [
    {
      name: 'address',
      type: 'text',
      label: 'Address'
    },
    {
      name: 'zipcode',
      type: 'text',
      label: 'Zip Code'
    },
    {
      name: 'zipcode',
      type: 'text',
      label: 'Zip Code'
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address'
    },
    {
      name: 'city',
      type: 'text',
      label: 'City'
    },
    {
      name: 'country',
      type: 'text',
      label: 'Country'
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone NUmber'
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email'
    },
  ]
  const _intializeValues = () => {
    return {
      address: '',
      zipcode: '',
      city: '',
      country: '',
      phone: '',
      email: '',
    }
  }

  const schema = yup.object().shape({
    address: yup.string().required('This is a required field'),
    zipcode: yup.date().required('This is a required field'),
    city: yup.date().required('This is a required field'),
    country: yup.string().required('This is a required field'),
    phone: yup.date().required('This is a required field'),
    email: yup.date().required('This is a required field'),
  })

  const { form, errors, handleChange, handleSubmit } = createForm({
		initialValues: _intializeValues(),
		// validationSchema: null, // schema,
		onSubmit: async (params: any) => {
      console.log("params: ", params);
		},
	})
</script>

<div class="border border-gray-100">
  <div class="border-b border-gray-100">
    <div class="p-8">
      <Typography size="default">Billing</Typography>
      <Typography size="sm" color="gray-500">Update your billing details</Typography>
    </div>
  </div>

  <div class="border-b border-gray-100">
    <div class="p-8">
      <BillingPlan />
    </div>
  </div>

  <div class="border-b border-gray-100">
    <div class="p-8">
      <BillingPaymentMethod />
    </div>
  </div>

  <!-- Billing Adress -->
  <div class="border-b border-gray-100">
    <div class="p-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <Typography size="default">Billing Address</Typography>
          <Typography size="sm" color="gray-500">Further instruction in one line</Typography>
        </div>
        <div class="cols-pan-1 sm:col-span-2">
          <div class="mb-6">
            <InputField
              md
              type="text"
              name="address"
              label="Address"
              labelSize="sm"
              lableClass="mb-2"
              inputClass="text-gray-900 rounded-xl border border-gray-200"
              error={$errors.address}
              bind:value={$form.address}
              onChange={handleChange}
            />
          </div>

          <div class="mb-0 sm:mb-6">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <InputField
                md
                type="text"
                name="zipcode"
                label="Zip Code"
                labelSize="sm"
                lableClass="mb-2"
                inputClass="text-gray-900 rounded-xl border border-gray-200"
                error={$errors.zipcode}
                bind:value={$form.zipcode}
                onChange={handleChange}
              />

              <InputField
                md
                type="text"
                name="city"
                label="City"
                labelSize="sm"
                lableClass="mb-2"
                inputClass="text-gray-900 rounded-xl border border-gray-200"
                error={$errors.city}
                bind:value={$form.city}
                onChange={handleChange}
              />

              <InputField
                md
                type="text"
                name="country"
                label="Country"
                labelSize="sm"
                lableClass="mb-2"
                inputClass="text-gray-900 rounded-xl border border-gray-200"
                wrapperClass="mb-6 sm:mb-0"
                error={$errors.country}
                bind:value={$form.country}
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="mb-0 sm:mb-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                md
                type="text"
                name="phone"
                label="Phone Number"
                labelSize="sm"
                lableClass="mb-2"
                inputClass="text-gray-900 rounded-xl border border-gray-200"
                error={$errors.phone}
                bind:value={$form.phone}
                onChange={handleChange}
              />

              <InputField
                md
                type="text"
                name="email"
                label="Email"
                labelSize="sm"
                lableClass="mb-2"
                inputClass="text-gray-900 rounded-xl border border-gray-200"
                error={$errors.email}
                bind:value={$form.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="border-b border-gray-100">
    <div class="p-8">
      <BillingABN />
    </div>
  </div>


  <!-- Billing contacts -->
  <div class="border-b border-gray-100">
    <div class="p-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <Typography size="default">Billing contacts</Typography>
          <Typography size="sm" color="gray-500">Change who gets billig notifications</Typography>
        </div>
        <div class="col-span-2">
     
          <InputField
            md
            type="text"
            name="card_number"
            label="Billing Contact"
            labelSize="sm"
            lableClass="mb-2"
            inputClass="text-gray-900 rounded-xl border border-gray-200 mb-2"
            bind:value={billingContact}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  </div>

  <div class="p-8">
    <div class="flex flex-row-reverse items-center">
      <Button
      md
      type="button"
      class="text-white bg-primary hover:bg-primary-"
      on:click={() => {}}
      >
      <Typography color="white" fontWeight="medium">Update</Typography>
    </Button>
    <a href={null} class="mr-4">
      <Typography size="default">Cancel</Typography>
    </a>
    </div>
  </div>
</div>