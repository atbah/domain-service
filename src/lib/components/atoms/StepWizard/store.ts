import { writable, get } from 'svelte/store'
export let initialStep = 1

export let step = writable(initialStep)

export const gotoStep = (page: number) => {
  step.set(page)
}

export const nextStep = () => {
  step.set(get(step) + 1)
}
export const previousStep = () => {
  const currentStep = get(step)
  
  if (currentStep > 0) {
    step.set(currentStep - 1)
  }
}
