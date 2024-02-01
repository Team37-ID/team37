import { NavItemTypes } from "@/types/types"

export const navItemsList: NavItemTypes[] = [
	{
		title: "Services",
		subMenu: [
			{
				title: "Development",
				url: "/development",
				description: "Lorem ipsum dolor sit amet",
				icon: "37.dev.svg",
			},
			{
				title: "Design",
				url: "/development",
				description: "Lorem ipsum dolor sit amet",
				icon: "37.des.svg",
			},
			// {
			// 	title: "Security",
			// 	url: "/development",
			// 	description: "Lorem ipsum dolor sit amet",
			// 	icon: "37.sec.svg",
			// },
			// {
			// 	title: "Outsource",
			// 	url: "/development",
			// 	description: "Lorem ipsum dolor sit amet",
			// 	icon: "37.out.svg",
			// },
			// {
			// 	title: "Education",
			// 	url: "/development",
			// 	description: "Lorem ipsum dolor sit amet",
			// 	icon: "37.edu.svg",
			// },
			// {
			// 	title: "AI",
			// 	url: "/development",
			// 	description: "Lorem ipsum dolor sit amet",
			// 	icon: "37.ai.svg",
			// },
		],
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
