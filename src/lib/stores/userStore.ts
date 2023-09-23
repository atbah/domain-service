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
    lastStep: number;
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
        currentStep: 0,
        lastStep: 0
    })
};

export const changeStep = (currentStep: number, lastStep: number): void => {
    user.update(current => ({
        currentStep: currentStep,
        lastStep: lastStep,
        registrationSteps: current?.registrationSteps || [],
        profile: current?.profile
    }))
}

// initialize user
initUser();
