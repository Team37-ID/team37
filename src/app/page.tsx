import ButtonCta from "@/components/ui/button/ButtonCta"
import Image from "next/image"

export default function Home() {
	return (
		<main className="flex flex-col items-center my-52 justify-between min-h-screen">
			<section className="landing-page flex flex-col items-center justify-center">
				<Image
					className="absolute z-10 hidden md:block"
					src="aurora.svg"
					width={1200}
					height={1200}
					alt="aurora background"
				/>
				<div className="flex flex-col gap-16">
					<div className="flex flex-col gap-12">
						<div className="hero-headline z-20">
							<h1 className="md:text-7xl md:leading-none text-center font-bold">
								<span className="bg-gradient-to-br bg-clip-text from-white to-[#706F6C] text-transparent">
									Scaling New Horizons
									<br />
									With Our Expert
								</span>
								<br />
							</h1>
							<h1 className="flex flex-row items-center justify-center gap-4 md:text-7xl text-center md:leading-none font-bold">
								<span className="text-[#2CDA9D] w-[137px]">
									Dev
								</span>
								<span className="bg-gradient-to-br bg-clip-text from-white to-[#706F6C] text-transparent">
									Services
								</span>
							</h1>
						</div>
						<div className="hero-subheadline z-20">
							<h2 className="md:text-2xl md:leading-8 font-medium text-white">
								We aim to assist your business in advancing
								through technology.
							</h2>
						</div>
					</div>
					<div className="flex flex-row items-center z-20 justify-center gap-2 text-lg leading-7 font-medium">
						<span>Press</span>
						<span className="flex items-center font-ibm-plexmono justify-center w-8 h-8 bg-gradient-to-br from-white to-[#706F6C] text-stone-700 rounded-md">
							C
						</span>
						<span>to contact us</span>
					</div>
				</div>
			</section>
			<section className="banner relative border-transparent w-full bg-zinc-800 rounded-2xl">
				<div className="flex flex-col w-full justify-center align-middle items-center py-12 gap-12 z-30">
					<Image
						className="absolute left-2 blur-lg w-fit h-fit"
						src="abstract.svg"
						width={128}
						height={128}
						alt="abstract"
					/>
					<Image
						className="absolute opacity-10 w-full h-fit rounded-2xl"
						src="noise.svg"
						width={2048}
						height={2048}
						alt="abstract"
					/>
					<Image
						className="z-30"
						src="team37-logo.svg"
						alt="Team 37 logo"
						width={150}
						height={150}
					/>
					<span className="flex flex-col z-30 align-middle items-center justify-center text-7xl leading-none font-bold bg-gradient-to-br bg-clip-text text-transparent from-white to-[#706F6C]">
						<h1>We listen</h1>
						<h1>We do</h1>
						<h1>We deliver</h1>
					</span>
					<ButtonCta>Free consultation</ButtonCta>
				</div>
			</section>
		</main>
	)
}
