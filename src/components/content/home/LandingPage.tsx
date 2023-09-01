import StarsParticle from "../../particles/StarsParticle"
import Image from "next/image"

const LandingPage = () => {
	return (
		<>
			<StarsParticle id="tsparticles" />
			<Image
				className="absolute z-10 hidden md:block"
				src="aurora.svg"
				width={1200}
				height={1200}
				alt="aurora background"
			/>
			<div className="flex flex-col md:gap-16">
				<div className="flex flex-col gap-6 md:gap-12">
					<div className="z-20 hero-headline">
						<h1 className="font-bold text-center text-3xl leading-9 md:text-7xl md:leading-none">
							<span className="bg-gradient-to-br bg-clip-text from-white to-[#706F6C] text-transparent">
								Scaling New Horizons
								<br />
								With Our Expert
							</span>
							<br />
						</h1>
						<h1 className="flex flex-row items-center justify-center gap-2 md:gap-4 font-bold text-center text-3xl leading-9 md:text-7xl md:leading-none">
							<span className="inline-flex flex-col w-auto h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
								<ul className="block animate-text-slide [&_li]:block">
									<li className="text-dev-service">Dev</li>
									<li className="text-des-service">Des</li>
									<li className="text-sec-service">Sec</li>
									<li className="text-out-service">Out</li>
									<li className="text-edu-service">Edu</li>
									<li className="text-ai-service">AI</li>
									<li
										aria-hidden="true"
										className="text-dev-service"
									>
										Dev
									</li>
								</ul>
							</span>
							<span className="bg-gradient-to-br bg-clip-text from-white to-[#706F6C] text-transparent">
								Services
							</span>
						</h1>
					</div>
					<div className="z-20 hero-subheadline">
						<h2 className="font-medium text-white text-sm leading-5 text-center w-80 md:text-2xl md:leading-8 md:w-auto">
							We aim to assist your business in advancing through
							technology.
						</h2>
					</div>
				</div>
				<div className="z-20 hidden md:flex md:flex-row items-center justify-center gap-2 text-lg font-medium leading-7">
					<span>Press</span>
					<span className="flex items-center font-ibm-plexmono justify-center w-8 h-8 bg-gradient-to-br from-white to-[#706F6C] text-stone-700 rounded-md">
						C
					</span>
					<span>to contact us</span>
				</div>
			</div>
		</>
	)
}

export default LandingPage
