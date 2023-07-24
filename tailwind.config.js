/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			dropShadow: {
				"glow-sm": "0 0 10px rgba(99, 102, 241, 1)",
				"glow-md": "0 0 20px rgba(99, 102, 241, 1)",
				"glow-lg": "0 0 30px rgba(99, 102, 241, 1)",
			},
		},
	},
	plugins: [],
}
