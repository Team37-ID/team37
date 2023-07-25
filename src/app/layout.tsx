import Script from "next/script"
import "./globals.css"
import { Inter } from "next/font/google"
import NavBar from "@/components/NavigationBar/NavBar"
import NavItemList from "@/components/NavigationBar/NavItemList"
import Image from "next/image"
import Link from "next/link"
import { NAV_ITEMS } from "@/components/NavigationBar/itemsList"
import ButtonNavBar from "@/components/ui/button/ButtonNavBar"
import ButtonCta from "@/components/ui/button/ButtonCta"

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
			<body
				className={`${inter.className} flex flex-col justify-between max-w-7xl md:min-w-3xl mx-auto top-0 bg-black`}
			>
				<header>
					<NavBar>
						<Link href="#" passHref>
							<Image
								src="/team37-logo.svg"
								alt="logo"
								width={128}
								height={128}
							/>
						</Link>
						<NavItemList>
							{NAV_ITEMS.map((item) => (
								<Link
									href={item.href || "/"}
									key={item.label}
									target="_blank"
								>
									<ButtonNavBar>{item.label}</ButtonNavBar>
								</Link>
							))}
						</NavItemList>
						<ButtonCta>Contact us</ButtonCta>
					</NavBar>
				</header>
				{children}
				<footer></footer>
			</body>
		</html>
	)
}
