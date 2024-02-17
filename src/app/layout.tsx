import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"

const manrope = Manrope({ subsets: ["latin"] })

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
			<body className={manrope.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
