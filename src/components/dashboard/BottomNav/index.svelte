<script>
  import { BottomNav } from 'flowbite-svelte'
	import { page } from '$app/stores'
	import { data, ONBOARDING_STEPS } from '$lib/data/data'
  import Typography from '$lib/components/Form/Typography.svelte'

  // $: isOnboarding = $page.url.pathname === "/onboarding"
</script>

<div class="block sm:hidden">
  <!-- {#if isOnboarding}
    <BottomNav position="absolute" classInner="grid-cols-4 flex justify-between mx-4 my-2.5">
      {#each ONBOARDING_STEPS as item, index}
        <a href={null} class="flex flex-col items-center px-3 text-center">
          <span class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <Typography size="xs" color={'' ? 'primary-500' : 'gray-800'}>{index + 1}</Typography>
          </span>
        </a>
      {/each}
    </BottomNav>
  {:else}
    <BottomNav position="absolute" classInner="grid-cols-4 flex justify-between mx-4 my-2.5">
      {#each data as item (item.title)}
        <a href={item.link} class="flex flex-col items-center px-3 text-center">
          <svelte:component this={item.icon} color={item.link === $page.url.pathname ? 'primary-500' : 'gray-800'} />
          <Typography color={item.link === $page.url.pathname ? 'primary-500' : 'gray-800'}>{item.title}</Typography>
        </a>
      {/each}
    </BottomNav>
  {/if} -->

  <BottomNav position="absolute" classInner="grid-cols-4 flex justify-between mx-4 my-2.5">
    {#each data as item (item.title)}
      <a href={item.link} class="flex flex-col items-center px-3 text-center">
        <svelte:component this={item.icon} color={item.link === $page.url.pathname ? 'primary-500' : 'gray-800'} />
        <Typography color={item.link === $page.url.pathname ? 'primary-500' : 'gray-800'}>{item.title}</Typography>
      </a>
    {/each}
  </BottomNav>
</div>
