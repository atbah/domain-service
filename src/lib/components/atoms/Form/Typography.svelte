<script lang="ts">
  export let size: string = 'base';
  export let color: string = '';
</script>

<p class="text-{size} dark:text-white text-{color}">
  <slot />
</p>
