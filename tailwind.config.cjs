const plugin = require('tailwindcss/plugin');

const customSizes = {
	12: '3rem', // 48px
	24: '6rem', // 96px
	32: '8rem', // 128px
	64: '16rem', // 256px
	72: '18rem', // 288
	80: '20rem', // 320px
	90: '22.5rem', // 360px
	96: '24rem', // 384px
	108: '27rem', // 432px
	112: '28rem', // 448px
	128: '32rem', // 512px
	140: '35rem', // 560px
	160: '40rem', // 640px
	164: '41rem', // 656px
	200: '54.25rem', // 900px
	256: '64rem', // 1024px
	384: '96rem', // 1536px
	480: '120rem', // 1920px
}

module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			width: customSizes,
			minWidth: customSizes,
			maxWidth: customSizes,
			height: customSizes,
			minHeight: customSizes,
			maxHeight: customSizes,

			colors: {
				'primary': '#16A34A',
				'primary-100': '#e8f6ed',
				'primary-200': '#d0eddb',
				'primary-300': '#a2dab7',
				'primary-400': '#45b56e',
				'primary-500': '#16A34A',
				'primary-600': '#12823B',
				'primary-700': '#0d622c',
				'red': '#FA5252',
				'red-100': '#FFF5F5',
				'red-200': '#FFE3E3',
				'red-300': '#FF8787',
				'red-400': '#FF6B6B',
				'red-500': '#FA5252',
				'red-600': '#F03E3E',
				'red-700': '#C92A2A',
				'orange': '#FF922B',
				'orange-100': '#FFF4E6',
				'orange-200': '#FFE8CC',
				'orange-300': '#FFC078',
				'orange-400': '#FFA94D',
				'orange-500': '#FF922B',
				'orange-600': '#F76707',
				'orange-700': '#D9480F',
				'green': '#51CF66',
				'green-100': '#EBFBEE',
				'green-200': '#D3F9D8',
				'green-300': '#8CE99A',
				'green-400': '#69DB7C',
				'green-500': '#51CF66',
				'green-600': '#37B24D',
				'green-700': '#2B8A3E',
				'gray-000': '#F8F9FA',
				'gray-100': '#F1F3F5',
				'gray-200': '#E9ECEF',
				'gray-300': '#DEE2E6',
				'gray-400': '#CED4DA',
				'gray-500': '#ADB5BD',
				'gray-600': '#868E96',
				'gray-700': '#495057',
				'gray-800': '#343A40',
				'gray-900': '#212529',
				'white': '#ffffff',
				'black': '#000000'
			},
			fontSize: {
				xs: '11px',
				sm: '13px',
				base: '14px',
				xl: '18px',
				'2xl': '20px',
				'3xl': '24px',
				'4xl': '28px',
				'5xl': '32px',
			},
		},
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('flowbite/plugin'),
		plugin(function({ addBase }) {
			addBase({
			  'html': { fontSize: "14px" },
			})
		}),
	],
};
