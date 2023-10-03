<script lang="ts">
  import {user} from '$lib/stores/userStore'
  import Avatar from '$lib/components/Avatar.svelte'
  import Typography from '$lib/components/Form/Typography.svelte'
  import Button from '$lib/components/Form/Button.svelte'

  const gotoSettings = () => {
    console.log("clicked manage account")
  }
</script>
{#if $user?.account}
  <div  class="absolute bottom-10 w-full">
    <div class="px-6">
      <Avatar src={$user?.account.avatar} />
  
      <div class="py-3">
        <Typography fontWeight="medium">{$user?.account.username}</Typography>
        <Typography color="gray-500">{$user?.account.username}</Typography>
      </div>
  
      <Button
          fullwidth
          type="button"
          class="text-white bg-white hover:bg-gray-300 border border-gray-500"
          on:click={gotoSettings}
        >
          <Typography fontWeight="medium">Manage Account</Typography>
        </Button>
    </div>
  </div>
{/if}