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

export type RoundLabelColor = undefined | 'success' | 'danger' | 'warning'

export interface RoundLabelProps {
  type?: RoundLabelColor;
  text: string;
  showDot?: boolean;
}

export type DomainStatus = "Active" | "Expired" | "Expiring Soon"

export interface Domain {
  domain: string;
  privider: string;
  expires_at: Date;
  status: string;
  description: string;
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
