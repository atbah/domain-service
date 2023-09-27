<script lang="ts">
  import InputField from '$lib/components/Form/InputField.svelte'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'

  export let nextStep: () => void

  let searchKey: string

  const onUpdate = () => {
    nextStep()
  }
</script>

<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Search for a web Address</Typography>
    <Typography color="gray-500">Check web address name availability and secure yours now</Typography>
  </div>
</div>

<div class="w-full flex items-center">
  <InputField
    md
    type="text"
    name="searchKey"
    placeholder="Find your domain name..."
    wrapperClass="flex-1"
    inputClass="p-3 text-gray-900 rounded-xl border border-gray-200"
    bind:value={searchKey}
  />
  <Button
    md
    type="button"
    class="ml-5 px-5 bg-primary hover:bg-primary-400"
    on:click={onUpdate}
  >
    <Typography color="white" fontWeight="medium">Update</Typography>
  </Button>
</div>
