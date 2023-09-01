import Script from "next/script"
import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import NavBar from "@/components/navbar/NavBar"
import Footer from "@/components/footer/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Team 37",
	description: "Team 37 home page",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<Script
					async
					strategy="afterInteractive"
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.FIREBASE_MEASUREMENT_ID}`}
				/>
				<Script
					id="ga-id"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments)}
						gtag('js', new Date());

						gtag('config', '${process.env.FIREBASE_MEASUREMENT_ID}');
						`,
					}}
				/>
			</head>
			<Providers>
				<body
					className={`${inter.className} selection:text-blue-900 selection:bg-blue-300 flex flex-col justify-between max-w-9xl md:min-w-3xl md:mx-auto top-0 bg-black`}
				>
					<header>
						<NavBar />
					</header>
					{children}
					<footer className="flex flex-col gap-12 z-40 align-middle pb-6 justify-center mx-7">
						<Footer />
					</footer>
				</body>
			</Providers>
		</html>
	)
}
