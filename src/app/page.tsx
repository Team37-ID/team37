import NavBar from "@/components/NavigationBar/NavBar"
import NavItemList from "@/components/NavigationBar/NavItemList"
import Image from "next/image"
import Link from "next/link"
import { NAV_ITEMS } from "@/components/NavigationBar/itemsList"
import ButtonNavBar from "@/components/ui/button/ButtonNavBar"
import ButtonCta from "@/components/ui/button/ButtonCta"

export default function Home() {
	return (
		<main className="flex flex-col justify-between min-h-screen max-w-7xl md:min-w-3xl mx-auto top-0 bg-black">
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
		</main>
	)
}
