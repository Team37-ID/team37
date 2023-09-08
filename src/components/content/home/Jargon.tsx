import ButtonCta from "@/components/ui/button/ButtonCta"
import { useMobileView } from "@/hooks/useMobileView"
import Image from "next/image"

const Jargon = () => {
	const isMobileView = useMobileView({ breakpoint: 763 })

	return (
		<>
			<div className="z-30 flex flex-col items-center justify-center gap-12 py-12 align-middle">
				<Image
					className="absolute left-2 blur-lg w-fit h-fit"
					src="abstract.svg"
					width={128}
					height={128}
					alt="abstract"
				/>
				<Image
					className="absolute object-cover top-0 left-0 opacity-10 w-full h-full"
					src="noise.svg"
					width={2048}
					height={2048}
					alt="abstract"
				/>
				<Image
					className="z-30"
					src="team37-logo.svg"
					alt="Team 37 logo"
					width={isMobileView ? 99 : 150}
					height={isMobileView ? 16 : 150}
				/>
				<span className="flex flex-col z-30 align-middle items-center justify-center text-5xl md:text-7xl leading-none font-bold bg-gradient-to-br bg-clip-text text-transparent from-white to-[#706F6C]">
					<h1>We listen</h1>
					<h1>We do</h1>
					<h1>We deliver</h1>
				</span>
				<ButtonCta>Free consultation</ButtonCta>
			</div>
		</>
	)
}

export default Jargon
