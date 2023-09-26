<script lang="ts">
  export let previousStep: () => void;
  export let nextStep: () => void;
</script>

<h1>Email Address</h1>
<!-- TODO: add components here-->

<div class="flex row">
  <button class="mr-4" on:click={previousStep}>
    Previous Step
  </button>
  <button on:click={nextStep}>
    Next Step
  </button>
</div>
