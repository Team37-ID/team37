import type { Metadata } from "next"
import { Chivo_Mono, Manrope } from "next/font/google"
import "./globals.css"

const chivo_mono = Chivo_Mono({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
	adjustFontFallback: true,
	fallback: ["sans-serif"],
	preload: true,
	display: "swap",
	variable: "--font-chivo-mono",
})

const manrope = Manrope({
	subsets: ["latin"],
	adjustFontFallback: true,
	fallback: ["sans-serif"],
	preload: true,
	display: "swap",
	variable: "--font-manrope",
})

export const metadata: Metadata = {
	title: "Home | Team 37",
	description: "Home page of Team 37",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${chivo_mono.variable} ${manrope.variable}`}>
				{children}
			</body>
		</html>
	)
}
