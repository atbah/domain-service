<script>
  import { Icon, CheckCircle, Check } from 'svelte-hero-icons';
  export let color = 'primary';
</script>

<Icon src={CheckCircle} class={`w-6 h-6 rounded-full font-bold text-${color}`} solid />
