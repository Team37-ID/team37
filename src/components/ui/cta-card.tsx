import { Boxes } from "@/components/ui/background-boxes"
import CtaButton from "./cta-button"

const CtaCard = () => {
	return (
		<>
			<div className="md:max-h-96 md:h-96 max-h-48 z-20 relative min-w-80 md:w-[64rem] border-white border overflow-hidden bg-black flex-shrink flex-grow flex flex-col items-center justify-center rounded-lg">
				<div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
				<Boxes />
				<div className="flex flex-col md:gap-8 gap-4 items-center justify-center z-20">
					<h1 className="text-white font-medium md:text-7xl text-2xl relative text-center items-center">
						Have a Project in Mind?
					</h1>
					<CtaButton />
				</div>
			</div>
		</>
	)
}

export default CtaCard
