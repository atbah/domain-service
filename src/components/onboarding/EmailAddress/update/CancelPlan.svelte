<script lang="ts">
  import Typography from '$lib/components/Form/Typography.svelte'
  import type { EmailProvider } from '$lib/types';

  export let previousStep: () => void
  export let selectedOption: EmailProvider

  const optionStyle = "py-4 rounded rounded-xl cursor-pointer border border-gray-500"
</script>

<div class="flex flex-row justify-between mb-4">
  <div>
    <Typography size="2xl" fontWeight="medium">Manage Plan</Typography>
    <Typography color="gray-500">Further instruction in one line</Typography>
  </div>
</div>
<div class="{optionStyle} mb-4">
  <div class="px-5 flex items-center">
    <div>
      <img src="/images/icons/GoogleLogo1.svg" alt="google" />
    </div>

    <div class="flex-1 ml-4">
      <div class="flex items-center justify-between">
        <Typography size="default" fontWeight="medium">{selectedOption.name}</Typography>
      </div>
      <div class="flex items-center">
        <Typography color="gray-600" fontWeight="sm">30 GB storage</Typography>
        <div class="mx-1">
          <Typography color="gray-500" fontWeight="sm">∙</Typography>
        </div>
        <Typography color="primary" fontWeight="sm">3 seats</Typography>
      </div>
    </div>
    <div class="flex items-center">
      <Typography size="default" fontWeight="medium">$27/m</Typography>
    </div>
  </div>
</div>

<div class="absolute left-8 bottom-8">
  <div class="flex row justify-between">
    <div>
      <a href={null} class="cursor-pointer" on:click={previousStep}>
        <Typography color="red-400" fontWeight="medium">Cancel Plan</Typography>
      </a>
    </div>
  </div>
</div>
