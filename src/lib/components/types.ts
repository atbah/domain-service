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

export type RoundLabelColor = undefined | 'success' | 'danger' | 'warning'

export interface RoundLabelProps {
  type?: RoundLabelColor;
  text: string;
  showDot?: boolean;
}
