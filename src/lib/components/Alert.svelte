<script lang="ts">
  import { Icon, Check } from 'svelte-hero-icons'

  export let type: string = 'success'
  export let className: string = ''

  let bgColor = 'bg-primary'
  let textColor = 'text-white'

  switch(type) {
    case 'error':
      bgColor = 'bg-red'
      break
    default:
      break
  }
</script>

<div class="max-w-140 flex justify-center rounded-2xl {textColor} {bgColor} {className}">
  <div class="flex px-5 py-4">
    <div class="w-[20px] h-[20px] flex rounded-full border border-gray-200 hover:bg-gray-200 cursor-pointer">
      <Icon src={Check} color="green" size="14" solid />
    </div>
  </div>
</div>
