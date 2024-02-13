import Link from "next/link"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

const SecService = () => {
	return (
		<div className="px-4">
			<Link
				href="/37-sec"
				className="flex flex-row group transition-all duration-300 gap-4 w-full overflow-x-auto items-start hover:bg-sec/30 p-4 rounded-md"
			>
				<span className="text-lexend-deca lowercase font-bold text-center text-lg text-black border border-black rounded-sm h-12 w-12 transition-all group-hover:text-white group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-sec">
					<div className="flex flex-col items-center justify-center align-middle group-hover:bg-noise group-hover:bg-contain w-full h-full">
						.sec
					</div>
				</span>
				<div className="flex flex-col">
					<NavigationMenuLink className="text-black font-medium text-base group-hover:text-sec capitalize">
						Development
					</NavigationMenuLink>
					<p className="text-sm text-gray-500 text-nowrap">
						Keeping you one step ahead from the bad actor
					</p>
				</div>
			</Link>
		</div>
	)
}

export default SecService
