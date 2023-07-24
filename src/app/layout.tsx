import Script from "next/script"
import "./globals.css"
import { Inter } from "next/font/google"

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
			<body className={inter.className}>{children}</body>
		</html>
	)
}
