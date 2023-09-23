<script lang="ts">
    import Stepper from '$lib/components/atoms/Stepper/Stepper.svelte';
    import { user, changeStep } from '$lib/stores/userStore';
    
    const onStepChange = ({ detail }: any) => {
        console.log("page: ", detail)
        changeStep(detail.current, detail.last)
    }
</script>

<div class="mx-4">
    <Stepper
        steps={$user?.registrationSteps || []}
        vertical={true}
        current={$user?.currentStep || 0}
        on:click={onStepChange}
    />
</div>
