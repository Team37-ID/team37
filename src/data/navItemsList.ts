import { NavItemTypes } from "@/types/types"

export const navItemsList: NavItemTypes[] = [
	{
		title: "Services",
		subMenu: [
			{
				title: "Development",
				url: "/development",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.",
				icon: ".dev",
				color: "dev",
			},
			{
				title: "Design",
				url: "/design",
				description: "Lorem ipsum dolor sit amet",
				icon: ".des",
				color: "des",
			},
			// {
			// 	title: "Security",
			// 	url: "/development",
			// 	description: "Lorem ipsum dolor sit amet",
			// 	icon: ".sec",
			// 	color: "sec",
			// },
			// {
			// 	title: "Outsource",
			// 	url: "/development",
			// 	description: "Lorem ipsum dolor sit amet",
			// 	icon: ".out",
			// 	color: "out",
			// },
			// {
			// 	title: "Education",
			// 	url: "/development",
			// 	description: "Lorem ipsum dolor sit amet",
			// 	icon: ".edu",
			// 	color: "edu",
			// },
			// {
			// 	title: "AI",
			// 	url: "/development",
			// 	description: "Lorem ipsum dolor sit amet",
			// 	icon: ".ai",
			// 	color: "ai",
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
