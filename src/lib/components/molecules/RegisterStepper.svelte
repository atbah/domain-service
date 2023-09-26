<script lang="ts">
  import Stepper from '$lib/components/atoms/Stepper/Stepper.svelte';
  import { user, onboardingStep, changeOnboardingStep } from '$lib/stores/userStore';
  
  const onStepChange = ({ detail }: any) => {
    changeOnboardingStep(detail.current, detail.last)
  }
</script>

<div class="mx-4">
  <Stepper
    steps={$user?.registrationSteps || []}
    vertical={true}
    current={$onboardingStep?.currentStep}
    on:click={onStepChange}
  />
</div>
