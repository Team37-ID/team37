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
				"ai-service": "#E4FF1A",
				"des-service": "#FC60A8",
				"out-service": "#FF7F11",
				"dev-card": "#0C1F17",
				"des-card": "#1F121B",
				"sec-card": "#221527",
				"out-card": "#2B1400",
				"edu-card": "#0F1B2D",
				"ai-card": "#221A00",
				"glassmorphism-08": "rgba(32, 32, 32, 0.08)",
				"glassmorphism-38": "rgba(32, 32, 32, 0.38)",
			},
			maxWidth: {
				"8xl": "88rem",
			},
			maxHeight: {
				"8xl": "88rem",
			},
			animation: {
				"text-slide": "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite"
			},
			keyframes: {
				"text-slide": {
					"0%, 13.33%": {
						transform: "translateY(0%)",
					},
					"16.66%, 29.99%": {
						transform: "translateY(-14.3%)",
					},
					"33.32%, 46.65%": {
						transform: "translateY(-28.6%)",
					},
					"49.98%, 63.31%": {
						transform: "translateY(-42.9%)",
					},
					"66.64%, 79.97%": {
						transform: "translateY(-57.2%)",
					},
					"83.3%, 96.63%": {
						transform: "translateY(-71.5%)",
					},
					"100%": {
						transform: "translateY(-85.8%)",
					},
				},
			},
		},
	},
	plugins: [],
}
