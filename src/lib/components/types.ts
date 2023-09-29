import type { Writable } from 'svelte/store'

export type OnChangeFuncProps = (event: Event) => any;

export interface StepperItem {
  name: string;
  description: string;
  alert?: string;
  disabled?: boolean;
};

export interface WizardProps {
  step: Writable<number>;
  nextStep: number;
  previousStep: number;
};

export type RoundLabelColor = undefined | 'success' | 'error' | 'warning'

export interface RoundLabelProps {
  type?: RoundLabelColor;
  text: string;
  showDot?: boolean;
}

export type SelectOptionType = {
	name: string
	value: string | number
}

export type FormFieldType = {
	name: string
	type: 'text' | 'number' | 'select' | 'checkbox'
	options?: SelectOptionType[] | undefined
	disabled?: boolean
	label?: string
}
