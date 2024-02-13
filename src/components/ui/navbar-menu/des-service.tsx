import Link from "next/link"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

const DesService = () => {
	return (
		<div className="px-4">
			<Link
				href="/37-des"
				className="flex flex-row group transition-all duration-300 gap-4 w-full overflow-x-auto items-start hover:bg-des/30 p-4 rounded-md"
			>
				<span
					className="text-lexend-deca lowercase font-bold text-center text-lg text-black border border-black rounded-sm h-12 w-12 transition-all group-hover:text-white group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-des"
				>
					<div className="flex flex-col items-center justify-center align-middle group-hover:bg-noise group-hover:bg-contain w-full h-full">
						.des
					</div>
				</span>
				<div className="flex flex-col">
					<NavigationMenuLink
						className={`text-black font-medium text-base group-hover:text-des capitalize`}
					>
						Design
					</NavigationMenuLink>
					<p className="text-sm text-gray-500 text-nowrap">
						Express your creative sides and let us do the work
					</p>
				</div>
			</Link>
		</div>
	)
}

export default DesService
