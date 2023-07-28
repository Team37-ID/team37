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
			fontFamily: {
				"ibm-plexmono": ["IBM Plex Mono", "monospace"],
			},
			colors: {
				"dev-service": "#2CDA9D",
				"sec-service": "#6610F2",
				"edu-service": "#70D6FF",
				"ai-service" : "#E4FF1A",
				"des-service": "#FC60A8",
				"out-service": "#FF7F11",
				"dev-card": "#0C1F17",
				"des-card": "#1F121B",
				"sec-card": "#221527",
				"out-card": "#2B1400",
				"edu-card": "#0F1B2D",
				"ai-card" : "#221A00",
			},
		},
	},
	plugins: [],
}
