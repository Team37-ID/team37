import Link from "next/link"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

type SubMenuProps = {
	title: string
	description: string
	href: string
	color: string
	icon: React.ReactNode
}

const SubMenu = ({ title, description, href, color, icon }: SubMenuProps) => {
	return (
		<div className="px-4">
			<Link
				href={`${href}`}
				className={`flex flex-row group transition-all duration-300 gap-4 w-full overflow-x-auto items-start hover:bg-${color}/30 p-4 rounded-md`}
			>
				<span
					className={`text-lexend-deca lowercase font-bold text-center text-lg text-black border border-black rounded-sm h-12 w-12 transition-all group-hover:text-white group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-${color}`}
				>
					<div className="flex flex-col items-center justify-center align-middle group-hover:bg-noise group-hover:bg-contain w-full h-full">
						{icon}
					</div>
				</span>
				<div className="flex flex-col">
					<NavigationMenuLink
						className={`text-black font-medium text-base group-hover:text-${color} capitalize`}
					>
						{title}
					</NavigationMenuLink>
					<p className="text-sm text-gray-500 text-nowrap">
						{description}
					</p>
				</div>
			</Link>
		</div>
	)
}

export default SubMenu
