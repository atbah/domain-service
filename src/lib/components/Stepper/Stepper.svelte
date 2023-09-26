<!--
   ## props 
    
  - `steps`:
    - Array of object. Length has to be more than 1
    - Required
    - Each item is a step object that can have:
      - `text`: The text displayed below each steps.
      - `icon`: A svelte component displayed inside each steps.
      - `iconProps`: An object that will be passed as props to the `icon` component.
  - `current`: current step index. Number. Default `0`
  - `size`: size of the step buttons. String. Default `"3rem"`
  - `line`: thickness of the connecting lines between the step buttons. String. Default `"0.3rem"`
  - `primary`: Primary color of passed and current steps. String. Default `'var(--bs-primary, #3a86ff)'`
  - `secondary`: Secondary color of future steps. String. Default `'var(--bs-secondary, #bbbbc0)'`
  - `light`: Primary color of text color in passed anc current steps. String. Default `'var(--bs-light, white)'`
  - `dark`: Secondary color of text color in future steps. String. Default `'var(--bs-dark, black)'`
  - `borderRadius`: Border radius of the step buttons. String. Default `'50%'` (circle)
  - `fontFamily`: Font family of the component. String. Default `"'Helvetica Neue', Helvetica, Arial, sans-serif"`
  - `f`: Vertical steps
  - `reverse`: For horizontal steps, reverse the step from right to the left; for vertical steps, reverse puts text labels to the left. Default `false`
  - `clickable`: When set to `false`, Clicking icons and labels will not change step. You have to change `current` to change step. Default `true`
  - `checkIcon`: User defined check icon for passed steps. If not specified, use the default check mark. Set to `null` if you don't want a check icon.
  - `alertIcon`: User defined alert icon for passed steps that has truthful `alert` property. If not specified, use the default alert icon. Set to `null` if you don't want an alert icon.
  - `alertColor`: User defined bg color for passed steps that has truthful `alert` property. Default 'var(--bs-danger, #dc3545)'

  ## events

  - `on:click(e)`: click event. Event detail object has two keys:
    - `e.detail.current`: the index of current step
    - `e.detail.last`: the index of last step
    
  -->
<script lang="ts">
  // A bootstrap step component
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import { createEventDispatcher } from 'svelte'
  import type { StepperItem } from '$lib/components/types'
  import Check from './Check.svelte'
  import Alert from './Alert.svelte'

  export let steps: StepperItem[]
  export let current = 0
  export let vertical = false
  export let size = vertical ? '28px' : '28px'
  export let line = vertical ? '0.15rem' : '0.3rem'
  export let lineHeight = undefined
  export let borderRadius = '50%'
  export let fontFamily = ''
  export let reverse = false
  export let clickable = true

  export let checkIcon: any = Check
  export let alertIcon: any = Alert

  const minStepSize = '5rem'
  const stepLabelSpace = '1rem'

  // for backward compatible when using lineHeight instead of line
  if (lineHeight) {
    line = lineHeight
  }

  // each segment is half of the step size
  let segmentSizes: { height: number; width: number }[] = []
  for (let i = 0; i < steps.length; i++) {
    segmentSizes.push({ height: 0, width: 0 })
  }

  if (current > steps.length - 1) {
    current = steps.length - 1
  }
  if (current < 0) {
    current = 0
  }

  let progress = tweened(current, { duration: 400, easing: cubicOut })
  let total = 0
  let key: 'height' | 'width' = vertical ? 'height' : 'width'

  function f(p: number) {
    // 0 - 1: $p * (0 + 1)/2
    // 1 - 2: 1 * (0 + 1)/2 + ($p-1) * (1 + 2)/2
    // 2 - 3: (0 + 1)/2 + (1 + 2)/2 + ($p-2) * (2+3)/2
    let ret = 0
    let i = 0
    while (p > 1) {
      p--
      ret += (segmentSizes[i][key] + segmentSizes[i + 1][key]) / 2
      i++
    }
    if (i < segmentSizes.length - 1) {
      ret += (p * (segmentSizes[i][key] + segmentSizes[i + 1][key])) / 2
    }
    return ret
  }

  let fill = f(current)

  $: {
    total = 0
    if (segmentSizes[0][key] > 0) {
      for (let i = 0; i < steps.length; i++) {
        total += segmentSizes[i][key]
      }
      total -=
        (segmentSizes[0][key] + segmentSizes[segmentSizes.length - 1][key]) / 2
    }
    fill = f($progress)
  }
  $: {
    $progress = current
  }
  const dispatch = createEventDispatcher()
  let onClick = (i: number) => {
    if (clickable) {
      let last = current
      current = i
      // $progress = i
      dispatch('click', { current, last })
    }
  }
</script>

<div
  class="w-full flex steps-container"
  style={
    `--size: ${size}; 
    --line-thickness: ${line};
    --border-radius: ${borderRadius};
    --font-family: ${
      fontFamily || "'Helvetica Neue', Helvetica, Arial, sans-serif"
    };
  `}
  style:flex-direction={vertical ? (reverse ? 'row-reverse' : 'row') : 'column'}
>
  <!-- progress line container -->
  <div
    class="flex flex-col items-center pl-4"
    style:width={vertical ? size : '100%'}
    style:min-width={vertical ? size : null}
    style:height={vertical ? '100%' : size}
    style:min-height={vertical ? null : size}
  >
    <div
      style:width={vertical ? line : `${segmentSizes[0].width / 2}px`}
      style:height={vertical ? `${segmentSizes[0].height / 2}px` : line}
    />
    <div
      style:width={vertical ? line : `${total}px`}
      style:height={vertical ? `${total}px` : line}
      class="bg-gray-500 flex items-center"
      style:flex-direction={vertical
        ? 'column'
        : reverse
        ? 'row-reverse'
        : 'row'}
    >
      <div
        class="bg-primary"
        style:width={vertical ? line : `${fill}px`}
        style:height={vertical ? `${fill}px` : line}
      />
      {#if line != size}
        <!-- the progress indicator -->
        <div
          class="bg-gray-500"
          style="width:8px; height:8px; border-radius: 50%;"
        ></div>
      {/if}
    </div>
    <div
      style:width={vertical ? line : `${segmentSizes[0].width / 2}px`}
      style:height={vertical ? `${segmentSizes[0].height / 2}px` : line}
    />
  </div>
  <!--  progress line end -->
  <div
    class="w-full"
    style:flex-direction="column"
    style:margin-left={vertical ? (reverse ? null : '-' + size) : null}
    style:margin-right={vertical ? (reverse ? '-' + size : null) : null}
    style:margin-top={vertical ? null : '-' + size}
  >
    {#each steps as step, i}
      <!-- step container -->
      <div
        class="flex items-center w-full rounded-xl hover:bg-primary px-2 stepper-item"
        style="flex-grow: 10;"
        style:flex-direction={vertical
          ? reverse
            ? 'row-reverse'
            : 'row'
          : 'column'}
        bind:clientWidth={segmentSizes[i].width}
        bind:clientHeight={segmentSizes[i].height}
        on:click={() => {
          if (!step.disabled) {
            onClick(i)
          }
        }}
        on:keypress={() => {}}
      >
        <!-- circle and text label -->
        <div
          class="flex items-center"
          style:flex-direction={vertical
            ? reverse
              ? 'row-reverse'
              : 'row'
            : 'column'}
          style:min-width={vertical ? 'var(--size)' : minStepSize}
          style:min-height={vertical ? minStepSize : 'var(--size)'}
        >
          <!-- circle -->
          <div
            class="step
              {i <= $progress
              ? step.alert
                ? 'bg-white'
                : 'bg-white'
              : 'bg-white'} 
              text-light
              "
            class:hover-highlight={clickable}
            class:shadow={i == current}
          >
            {#if step.alert}
              <svelte:component this={alertIcon} />
            {:else}
              {#if i <= $progress}
                <svelte:component this={checkIcon} />
              {:else}
                <span class="step__number bg-white rounded-full border border-gray-500"></span>
              {/if}
            {/if}
          </div>
          <!-- text label -->
          <div
            class="steps__label cursor-pointer"
            class:hover-highlight={clickable}
            style:margin-left={vertical
              ? reverse
                ? null
                : stepLabelSpace
              : null}
            style:margin-right={vertical
              ? reverse
                ? stepLabelSpace
                : null
              : null}
            style:margin-top={vertical ? null : stepLabelSpace}
            style:text-align={vertical
              ? reverse
                ? 'right'
                : 'left'
              : 'center'}
          >
            {#if typeof step.name != 'undefined'}
              <div
                class:text-primary={i <= $progress}
              >
                <div class={`step-name text-base text-gray-700 ${current === i && 'text-gray-900 font-bold'}`}>{step.name}</div>

                {#if step.alert}
                  <div class="step-description text-sm text-red">{step.alert}</div>
                {:else}
                  <div class="step-description text-sm text-gray-500">{step.description}</div>
                {/if}
              </div>
            {:else}
              <div />
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .steps-container {
    font-family: var(--font-family);
    box-sizing: border-box;
  }

  .step {
    border-radius: var(--border-radius);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    min-width: var(--size);
    height: var(--size);
    min-height: var(--size);
    font-size: calc(var(--size) * 0.5);
  }
  .step__number {
    width: 24px;
    height: 24px;
  }
  // Highlight the circle
  // .hover-highlight:hover {
  //   cursor: pointer;
  //   filter: brightness(85%);
  //   box-sizing: border-box;
  // }
  .steps__label {
    font-size: larger;
    box-sizing: border-box;
  }
  .stepper-item {
    &:hover {
      .step-name {
        color: #fff;
      }
      .step-description {
        color: #fff;
      }
    }
  }
  // .text-light {
  //   color: var(--light) !important;
  // }
  .shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
</style>
