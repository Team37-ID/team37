"use client"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "@/components/ui/logo"
import Link from "next/link"
import DevService from "./navbar-menu/dev-service"
import DesService from "./navbar-menu/des-service"

const Navbar = () => {
	return (
		<header className="flex flex-row items-center justify-between absolute px-8 py-4 z-50 w-full">
			<Logo width={128} height={128} />
			<NavigationMenu className="border rounded-full p-1">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger
							aria-label="Services"
							className="capitalize"
						>
							Services
						</NavigationMenuTrigger>
						<NavigationMenuContent className="pt-4 pb-4">
							<DevService />
							<DesService />
						</NavigationMenuContent>
						<Link href="/projects" passHref>
							<NavigationMenuLink
								className={`capitalize ${navigationMenuTriggerStyle()}`}
							>
								Projects
							</NavigationMenuLink>
						</Link>
						<Link href="/pricing" passHref>
							<NavigationMenuLink
								className={`capitalize ${navigationMenuTriggerStyle()}`}
							>
								Pricing
							</NavigationMenuLink>
						</Link>
						<Link href="/career" passHref>
							<NavigationMenuLink
								className={`capitalize ${navigationMenuTriggerStyle()}`}
							>
								Career
							</NavigationMenuLink>
						</Link>
						<Link href="/blog" passHref>
							<NavigationMenuLink
								className={`capitalize ${navigationMenuTriggerStyle()}`}
							>
								Blog
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger
							aria-label="Contact"
							className="capitalize"
						>
							Contact
						</NavigationMenuTrigger>
						<NavigationMenuContent className="pt-4 pb-4">
							{/* TODO: Add Contact Item */}
							{/* TODO: - Contact Sales */}
							{/* TODO: - Contact Support */}
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<button
				type="button"
				className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full px-6 cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-sm font-medium text-white backdrop-blur-3xl">
					Book A Call
				</span>
			</button>
		</header>
	)
}

export default Navbar
