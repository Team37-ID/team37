import Image from "next/image"

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
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
								<span className="text-[#2CDA9D] w-[137px]">Dev</span>
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
		</main>
	)
}
