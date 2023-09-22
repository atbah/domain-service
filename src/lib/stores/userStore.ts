import { writable } from 'svelte/store'
import type { StepperItem } from '$lib/components/types';

export interface UserProfile {
    username: string;
    email: string;
    phone: string;
    role: string;
};

export interface User {
    profile: UserProfile | undefined;
    registrationSteps: StepperItem[];
    currentStep: number;
};

export const user = writable(null as User | null);

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
                alert: 'Url is expired'
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
        ],
        currentStep: 0
    })
};

export const changeStep = (step: number): void => {
    user.update(current => ({ currentStep: step, registrationSteps: current?.registrationSteps || [], profile: current?.profile }))
}

// initialize user
initUser();
