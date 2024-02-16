import { Boxes } from "@/components/ui/background-boxes"
import CtaButton from "./cta-button"

const CtaCard = () => {
	return (
		<>
			<div className="md:h-96 z-20 relative md:w-[64rem] border-white border overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
				<div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
				<Boxes />
				<div className="flex flex-col gap-8 items-center justify-center z-20">
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
