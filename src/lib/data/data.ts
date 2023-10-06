import type { Domain, EmailProvider, Duration, EmailAddress } from '$lib/types';
import HomeIcon from '@components/dashboard/sidebar/icons/HomeIcon.svelte';
import TasksIcon from '@components/dashboard/sidebar/icons/TasksIcon.svelte';
import SettingsIcon from '@components/dashboard/sidebar/icons/SettingsIcon.svelte';
import ProjectsIcon from '@components/dashboard/sidebar/icons/ProjectsIcon.svelte';

export const data = [
	{
		title: 'Home',
		icon: HomeIcon,
		link: '/'
	},
	{
		title: 'Onboarding',
		icon: ProjectsIcon,
		link: '/onboarding'
	},
	{
		title: 'Customers',
		icon: ProjectsIcon,
		link: '/admin/projects'
	},
	{
		title: 'Library',
		icon: TasksIcon,
		link: '/admin/tasks'
	},
	{
		title: 'Settings',
		icon: SettingsIcon,
		link: '/settings'
	}
];

export const TEST_WEB_ADDRESSES: Domain[] = [
	{
		domain: 'championweb.com.au',
  	privider: 'Namecheap',
		description: 'Basic DNS',
  	expires_at: new Date('2024-11-02'),
  	status: 'Active',
	},
	{
		domain: 'mybusiness.com.au',
  	privider: 'Namecheap',
		description: 'Basic DNS',
  	expires_at: new Date('2023-06-03'),
  	status: 'Expired',
	},
	{
		domain: 'mybusiness.com',
  	privider: 'Namecheap',
		description: 'Basic DNS',
  	expires_at: new Date('2023-11-02'),
  	status: 'Active',
	}
]

export const TEST_EMAIL_PROVIDERS: EmailProvider[] = [
	{
		name: 'Google Workspace',
		description: 'Further description in two lines.',
		icon: '/images/icons/GoogleLogo1.svg',
		plans: [
			{
				name: 'Basic',
				price: 9,
				currency: '$',
				type: 'm',
				features: [
					'30 GB storage',
					'Professional email inbox',
					'Up to 5 users',
					'Google Workspace'
				],
				icons: [
					'/images/icons/GoogleSheet.svg',
					'/images/icons/Docs.svg',
					'/images/icons/Slides.svg',
				]
			},
			{
				name: 'Business',
				price: 99,
				currency: '$',
				type: 'm',
				features: [
					'2000 GB storage',
					'Professional email inbox',
					'Up to 5 users',
					'Google Workspace'
				],
				icons: [
					'/images/icons/GoogleSheet.svg',
					'/images/icons/Docs.svg',
					'/images/icons/Slides.svg',
				]
			}
		]
	},
	{
		name: 'Micorsoft 360',
		description: 'Further description in two lines.',
		icon: '/images/icons/MicrosoftLogo1.svg',
		plans: [
			{
				name: 'Basic',
				price: 9,
				currency: '$',
				type: 'm',
				features: [
					'30 GB storage',
					'Professional email inbox',
					'Up to 5 users',
					'Office 365 online'
				]
			},
			{
				name: 'Business',
				price: 99,
				currency: '$',
				type: 'm',
				features: [
					'2000 GB storage',
					'Professional email inbox',
					'Up to 5 users',
					'Office 365 Desktop'
				],
				icons: [
					'/images/icons/PowerPoint.svg',
					'/images/icons/Word.svg',
					'/images/icons/Excel.svg',
				]
			}
		]
	}
]


export const TEST_DURATION: Duration[] = [
	{
		name: '5 years',
		price: 379,
		discount: 116,
		currency: '$',
	},
	{
		name: '4 years',
		price: 329,
		discount: 67,
		currency: '$',
	},
	{
		name: '3 years',
		price: 249,
		discount: 48,
		currency: '$',
	},
	{
		name: '2 years',
		price: 179,
		discount: 19,
		currency: '$',
	},
	{
		name: '1 year',
		price: 99,
		discount: 0,
		currency: '$',
	}
]


export const TEST_EMAIL_ADDRESSES: EmailAddress[] = [
	{
		username: 'Jone Doe',
		email: 'jone@mybusiness.com',
		storage: '2GB',
		status: 'Activation Required'
	},
	{
		username: 'Edward Winter',
		email: 'edward@mybusiness.com',
		storage: '29GB',
		status: 'Active'
	},
]
