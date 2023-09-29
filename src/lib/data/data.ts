import type { Domain, EmailProvider } from '$lib/types';
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
		link: '/admin/settings'
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
		icon: 'google',
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
				]
			}
		]
	},
	{
		name: 'Micorsoft 360',
		description: 'Further description in two lines.',
		icon: 'microsoft',
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
				]
			}
		]
	}
]
