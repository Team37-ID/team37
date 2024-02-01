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
import SubMenu from "@/components/ui/submenu"

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
							<NavigationMenuContent className="pt-4 pb-4">
								<SubMenu
									href="/"
									title="Development"
									color="dev"
									icon=".dev"
									description="Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Quos, quae."
								/>
								<SubMenu
									href="/"
									title="Design"
									color="des"
									icon=".des"
									description="Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Quos, quae."
								/>
								<SubMenu
									href="/"
									title="Security"
									color="sec"
									icon=".sec"
									description="Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Quos, quae."
								/>
								<SubMenu
									href="/"
									title="Outsource"
									color="out"
									icon=".out"
									description="Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Quos, quae."
								/>
								<SubMenu
									href="/"
									title="Education"
									color="edu"
									icon=".edu"
									description="Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Quos, quae."
								/>
								<SubMenu
									href="/"
									title="Artificial Intelligence"
									color="ai"
									icon=".ai"
									description="Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Quos, quae."
								/>
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
