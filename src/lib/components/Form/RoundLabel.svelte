<script lang="ts">
  import type { RoundLabelColor } from '$lib/components/types'

  export let type: RoundLabelColor
  export let text: string
  export let showDot: boolean = true

  let textColor = ''
  let bgColor = ''
  let wrapperBgColor = ''

  switch(type) {
    case 'success':
      textColor = 'text-primary'
      bgColor = 'bg-primary'
      wrapperBgColor = 'bg-primary-200'
      break
    case 'error':
      textColor = 'text-red'
      bgColor = 'bg-red'
      wrapperBgColor = 'bg-red-200'
      break
    case 'warning':
      textColor = 'text-yellow'
      bgColor = 'bg-yellow'
      wrapperBgColor = 'bg-yellow-200'
      break
    default:
      break
  }
</script>

<div class="h-8 flex row items-center px-4 rounded rounded-xl {wrapperBgColor}">
  {#if showDot}
    <div class="w-2 h-2 rounded rounded-full mr-2 {bgColor}"></div>
  {/if}
  <div class="{textColor} text-sm">{text}</div>
</div>