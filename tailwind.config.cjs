/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'Helvetica', 'Ariel', 'sans-serif']
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],
}
