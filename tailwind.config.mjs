/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'principal' : '#58bbbb',
				'secundario1' : '#3b857a',
				'secundario2' : '#91cec5',
				'adicional1' : '#e5edef',
				'adicional2' : '#132428',
			},
			fontFamily: {
				'gotham' : ['Gotham Book', 'sans-serif']
			},
			width: {
				'128': '32rem'
			}
		},
	},
	plugins: [],
}
