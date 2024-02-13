import Link from "next/link"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"

const AiService = () => {
	return (
		<div className="px-4">
			<Link
				href="/37-ai"
				className="flex flex-row group transition-all duration-300 gap-4 w-full overflow-x-auto items-start hover:bg-ai/30 p-4 rounded-md"
			>
				<span
					className="text-lexend-deca lowercase font-bold text-center text-lg text-black border border-black rounded-sm h-12 w-12 transition-all group-hover:text-white group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-ai"
				>
					<div className="flex flex-col items-center justify-center align-middle group-hover:bg-noise group-hover:bg-contain w-full h-full">
						.ai
					</div>
				</span>
				<div className="flex flex-col">
					<NavigationMenuLink
						className={`text-black font-medium text-base group-hover:text-ai capitalize`}
					>
						Artificial Intelligence
					</NavigationMenuLink>
					<p className="text-sm text-gray-500 text-nowrap">
						Transform your workflow with the help of AI
					</p>
				</div>
			</Link>
		</div>
	)
}

export default AiService
