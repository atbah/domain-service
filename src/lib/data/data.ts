import HomeIcon from './icons/HomeIcon.svelte';
import TasksIcon from './icons/TasksIcon.svelte';
import SettingsIcon from './icons/SettingsIcon.svelte';
import ProjectsIcon from './icons/ProjectsIcon.svelte';

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
