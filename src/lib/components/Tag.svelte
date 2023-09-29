<script lang="ts">
  import { Icon, Tag } from 'svelte-hero-icons'

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

<div class="flex items-center">
  <Icon src={Tag} class="text-primary mr-1" size="20" solid />
  <slot></slot>
</div>

