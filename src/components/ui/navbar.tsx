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
import CtaButton from "./cta-button"

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
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Company</NavigationMenuTrigger>
						<NavigationMenuContent className="px-2 pt-4 pb-4 w-full flex flex-col space-y-3">
							<Link href="/about-us" className="group" passHref>
								<NavigationMenuLink className="capitalize transition-all duration-300 text-black px-4 py-2 w-full text-nowrap group-hover:bg-transparent group-hover:text-neutral-400">
									About Us
								</NavigationMenuLink>
							</Link>
							<Link href="/career" className="group" passHref>
								<NavigationMenuLink className="capitalize transition-all duration-300 text-black px-4 py-2 w-full text-nowrap group-hover:bg-transparent group-hover:text-neutral-400">
									Career
								</NavigationMenuLink>
							</Link>
							<Link href="/blog" className="group" passHref>
								<NavigationMenuLink className="capitalize transition-all duration-300 text-black px-4 py-2 w-full text-nowrap group-hover:bg-transparent group-hover:text-neutral-400">
									Blog
								</NavigationMenuLink>
							</Link>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger
							aria-label="Contact"
							className="capitalize"
						>
							Contact
						</NavigationMenuTrigger>
						<NavigationMenuContent className="px-2 pt-4 pb-4 w-full flex flex-col space-y-3">
							<Link href="/sales" className="group" passHref>
								<NavigationMenuLink className="capitalize transition-all duration-300 text-black px-4 py-2 w-full text-nowrap group-hover:bg-transparent group-hover:text-neutral-400">
									Contact Sales
								</NavigationMenuLink>
							</Link>
							<Link href="/support" className="group" passHref>
								<NavigationMenuLink className="capitalize transition-all duration-300 text-black px-4 py-2 w-full text-nowrap group-hover:bg-transparent group-hover:text-neutral-400">
									Contact Support
								</NavigationMenuLink>
							</Link>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<CtaButton />
		</header>
	)
}

export default Navbar
