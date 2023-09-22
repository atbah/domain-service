<script lang="ts">
    import Stepper from '$lib/components/atoms/Stepper/Stepper.svelte';
    import { user } from '$lib/stores/userStore';
</script>

<div class="mx-4">
    <Stepper steps={$user?.registrationSteps || []} vertical={true} />
</div>
