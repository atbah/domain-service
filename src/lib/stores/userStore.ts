import { writable, get } from 'svelte/store'
import type { StepperItem, Domain } from '$lib/components/types'

export interface UserProfile {
  username: string;
  email: string;
  phone: string;
  role: string;
  businessName: string;
  registrationDate: Date;
  renewalDate: Date;
  website: string;
}

export interface User {
  profile: UserProfile | undefined;
  registrationSteps: StepperItem[];
  domains: Domain[];
}

export interface OnboardingStep {
  currentStep: number;
  lastStep: number;
}

export const user = writable(null as User | null)

export const onboardingStep = writable({
  currentStep: 0,
  lastStep: 0
})

const initUser = () => {
  user.set({
    profile: undefined,
    registrationSteps: [
      {
        name: 'Business Registration',
        description: 'Description in one line',
      },
      {
        name: 'Web Address',
        description: 'Description in one line',
      },
      {
        name: 'Website',
        description: 'Description in one line',
      },
      {
        name: 'Email Address',
        description: 'Description in one line',
      },
      {
        name: 'Xero',
        description: 'Description in one line',
      },
      {
        name: 'Bookkeeping',
        description: 'Description in one line',
      },
    ]
  })
}

export const changeOnboardingStep = (currentStep: number, lastStep: number): void => {
  onboardingStep.set({ currentStep, lastStep })
}

export const changeUserProfile = (params: any): void => {
  const currentUser = get(user)
  const profile = { ...currentUser?.profile, ...params }
  const newUser = { ...currentUser, profile: profile }
  user.set(newUser as User)
}

export const changeUserProfileByField = (fieldName: string, value: any): void => {
  const currentUser = get(user)
  const profile = { ...currentUser?.profile, [fieldName]: value }
  const newUser = { ...currentUser, profile: profile }
  user.set(newUser as User)
}

// initialize user
initUser();
