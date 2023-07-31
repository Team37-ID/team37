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
import {
	Phone,
	Mail,
	Instagram,
	TikTok,
	LinkedIn,
	Facebook,
	Twitter,
	YouTube,
	Dribbble,
	GitHub,
} from "iconoir-react"

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
				className={`${inter.className} flex flex-col justify-between max-w-8xl md:min-w-3xl mx-auto top-0 bg-black`}
			>
				<header>
					<NavBar>
						<Link href="#" passHref>
							<Image
								src="team37-logo.svg"
								alt="Team 37 logo"
								width={150}
								height={150}
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
				<footer className="flex flex-row justify-between pb-6 z-50">
					<section className="brand-identity flex flex-col justify-between items-start gap-4 h-48 text-base leading-6 font-medium text-zinc-300">
						<Link href="#">
							<Image
								src="team37-logo.svg"
								alt="Team 37 logo"
								width={150}
								height={150}
							/>
						</Link>
						<p>PT Nusa Tekno Solusi</p>
						<p className="w-[277px]">
							Ruko Mega Grosir Cempaka Mas Blok I No.51, Jalan
							Sumur Batu, Kecamatan Kemayoran, Jakarta Pusat
						</p>
					</section>
					<section className="flex flex-col gap-6">
						<h3 className="text-lg leading-7 font-semibold text-white">
							Contact Info
						</h3>
						<div className="flex flex-col gap-4 text-zinc-300">
							<Link
								className="hover:text-zinc-50 transition duration-300"
								href="mailto:team37.id@gmail.com"
							>
								<div className="email flex flex-row gap-2 text-base leading-6 font-normal">
									<Mail />
									<p>team37.id@gmail.com</p>
								</div>
							</Link>
							<Link
								className="hover:text-zinc-50 transition duration-300"
								href="https://api.whatsapp.com/send?phone=62812878722257"
							>
								<div className="phone flex flex-row gap-2">
									<Phone />
									<p>+62 812-8787-2257</p>
								</div>
							</Link>
						</div>
					</section>
					<section className="flex flex-col gap-6">
						<h3 className="text-lg leading-7 font-semibold text-white">
							Sitelinks
						</h3>
						<ul className="flex flex-col gap-4 text-zinc-300">
							<Link
								className="hover:text-zinc-50 transition duration-300"
								href="/about"
							>
								<li>About</li>
							</Link>
							<Link
								className="hover:text-zinc-50 transition duration-300"
								href="/services"
							>
								<li>Services</li>
							</Link>
							<Link
								className="hover:text-zinc-50 transition duration-300"
								href="/projects"
							>
								<li>Projects</li>
							</Link>
							<Link
								className="hover:text-zinc-50 transition duration-300"
								href="/blog"
							>
								<li>Blog</li>
							</Link>
							<Link
								className="hover:text-zinc-50 transition duration-300"
								href="/careers"
							>
								<li>Careers</li>
							</Link>
						</ul>
					</section>
					<section className="flex flex-col gap-6">
						<h3 className="text-lg leading-7 font-semibold text-white">
							Follow Us
						</h3>
						<div className="grid grid-cols-4 flex-row gap-4 text-zinc-300">
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href="https://instagram.com/team37.id"
							>
								<Instagram />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<TikTok />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href="https://www.linkedin.com/company/team-37-id/"
							>
								<LinkedIn />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<Facebook />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<Twitter />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<YouTube />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href=""
							>
								<Dribbble />
							</Link>
							<Link
								className="hover:text-zinc-500 transition duration-100 ease-linear"
								href="https://github.com/Team37-ID"
							>
								<GitHub />
							</Link>
						</div>
					</section>
				</footer>
			</body>
		</html>
	)
}
