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
			<NavigationMenu>
				<NavigationMenuList className="">
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
							<NavigationMenuContent className="flex flex-col p-4">
								{item.subMenu?.map((subItem) => (
									<div
										key={`${navId}-${subItem.title.toLowerCase()}`}
										className="flex flex-row w-full flex-nowrap"
									>
										<Image
											src={`${subItem.icon}`}
											width={48}
											height={48}
											alt={`37.${subItem.color} Logo`}
										/>
										<Link
											href={`${subItem.url}`}
											className="flex flex-col justify-center items-start p-2 rounded-md w-full text-nowrap transition-all duration-300 hover:bg-gray-100"
										>
											<NavigationMenuLink className="text-black w-full text-base capitalize font-medium bg-transparent hover:bg-transparent">
												{subItem.title}
											</NavigationMenuLink>
											<p className="text-gray-400 text-nowrap text-sm">
												{subItem.description}
											</p>
										</Link>
									</div>
								))}
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
