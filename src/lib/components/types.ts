import type { Writable } from 'svelte/store'

export type OnChangeFuncProps = (event: Event) => any;

export interface StepperItem {
    name: string;
    description: string;
    alert?: string;
};

export interface WizardProps {
    step: Writable<number>;
    nextStep: number;
    previousStep: number;
};
