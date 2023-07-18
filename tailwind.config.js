/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'adv-purple': {
					100: '#4c3ffd',
					200: '#2010fd',
					300: '#2d0292',
					400: '#1c015b',
					500: '#0d012a',
				},
				'adv-blue': {
					100: '#04adab',
					200: '#05d0cd',
					300: '#06f2ef',
					400: '#2cfaf7',
					500: '#58fbf9',
				},
				'adv-orange': {
					100: '#fcb06d',
					200: '#fc9a46',
					300: '#fb851f',
					400: '#f37304',
					500: '#ca5f04',
				},
			},
		},
	},
	plugins: [],
};
