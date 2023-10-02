<script lang="ts">
  export let size: string = 'base';
  export let color: string = '';
  export let fontWeight: string = '';
</script>

<p class={`font-inter text-${size} dark:text-white ${color === '' ? 'text-gray-900' : `text-${color}`} font-${fontWeight} leading-5`}>
  <slot />
</p>
