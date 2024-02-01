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
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { navItemsList } from "@/data/navItemsList"
import { useId } from "react"
import Image from "next/image"

const Navbar = () => {
	const navId = useId()

	return (
		<header className="flex flex-row items-center justify-between absolute px-8 py-4 z-50 w-full">
			<Logo width={128} height={128} />
			<NavigationMenu className="border rounded-full p-1">
				<NavigationMenuList>
					{navItemsList.map((item) => (
						<NavigationMenuItem
							key={`${navId}-${item.title.toLowerCase()}`}
						>
							{item.hasSubMenu ? (
								<NavigationMenuTrigger
									aria-label={item.title}
									className="capitalize"
								>
									{item.title}
								</NavigationMenuTrigger>
							) : (
								<Link
									key={`${navId}-${item.title.toLowerCase()}`}
									href={`${item.url}`}
									passHref
								>
									<NavigationMenuLink
										className={`capitalize ${navigationMenuTriggerStyle()}`}
									>
										{item.title}
									</NavigationMenuLink>
								</Link>
							)}
							<NavigationMenuContent>
								<div className="p-4">
									<Link
										href=""
										className="flex flex-row group transition-all duration-300 gap-4 w-full overflow-x-auto items-start hover:bg-dev/30 p-4 rounded-md"
									>
										<span className="text-lexend-deca lowercase font-bold text-center text-lg text-black border border-black rounded-sm py-2 px-1 transition-all group-hover:text-dev">
											.dev
										</span>
										<div className="flex flex-col">
											<NavigationMenuLink className="text-black font-medium text-base group-hover:text-dev capitalize">
												Development
											</NavigationMenuLink>
											<p className="text-sm text-gray-500 text-nowrap">
												Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Quos, quae.
											</p>
										</div>
									</Link>
								</div>
								<div className="p-4">
									<Link
										href=""
										className="flex flex-row group transition-all duration-300 gap-4 w-full overflow-x-auto items-start hover:bg-des/30 p-4 rounded-md"
									>
										<span className="text-lexend-deca lowercase font-bold text-center text-lg text-black border border-black rounded-sm py-2 px-1 transition-all group-hover:text-des">
											.des
										</span>
										<div className="flex flex-col">
											<NavigationMenuLink className="text-black font-medium text-base group-hover:text-des capitalize">
												Development
											</NavigationMenuLink>
											<p className="text-sm text-gray-500 text-nowrap">
												Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Quos, quae.
											</p>
										</div>
									</Link>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
			<Button className="text-white capitalize">Book a call</Button>
		</header>
	)
}

export default Navbar
