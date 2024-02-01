import { NavItemTypes } from "@/types/types"

export const navItemsList: NavItemTypes[] = [
	{
		title: "Services",
		subMenu: [{ title: "Development", url: "/development" }],
		hasSubMenu: true,
	},
	{
		title: "Projects",
		url: "/projects",
		hasSubMenu: false,
	},
	{
		title: "Pricing",
		url: "/pricing",
		hasSubMenu: false,
	},
	{
		title: "Career",
		url: "/career",
		hasSubMenu: false,
	},
	{
		title: "Blog",
		url: "/blog",
		hasSubMenu: false,
	},
]
