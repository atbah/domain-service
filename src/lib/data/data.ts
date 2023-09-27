import type { Domain } from '$lib/components/types';
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
