<script>
  import { Icon, ArrowRight, Check } from 'svelte-hero-icons'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'
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
      <div class="grid grid-cols-3 gap-4">
        <div>
          <Typography size="default">Plan</Typography>
          <Typography size="sm" color="gray-500">Manage your plan</Typography>
        </div>
        <div class="col-span-2">
          <div class="mb-2">
            <Typography size="sm" color="gray-700">Current plan</Typography>
          </div>

          <div class="p-8 border border-gray-100 rounded-xl">
            <div class="flex justify-between">
              <div>
                <Typography size="default">Standard</Typography>
                <Typography size="sm" color="primary-500">Paid monthly</Typography>
              </div>
              <div>
                <Typography size="default">$32/m</Typography>
              </div>
            </div>

            <div>
              <div class="flex">
                <Icon src={Check} class="text-gray-600 mr-1" size="20" solid />
                <Typography size="xs" color="gray-600">Professional email inbox</Typography>
              </div>
              <div class="flex">
                <Icon src={Check} class="text-gray-600 mr-1" size="20" solid />
                <Typography size="xs" color="gray-600">Up to 5 users</Typography>
              </div>
            </div>
          </div>

          <div class="mt-5 sm:mt-4 sm:flex items-center">
            <Button
              md
              type="button"
              class="text-white bg-primary hover:bg-primary-300 mr-6"
              on:click={() => {}}
            >
              <Typography size="default" color="white" fontWeight="medium">Update Plan</Typography>
            </Button>
            
            <a href={null} class="text-gray-500 cursor-pointer" on:click={() => {}}>
              <Typography color="red-300">Cancel Plan</Typography>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="border-b border-gray-100">
    <div class="p-8">

    </div>
  </div>
</div>