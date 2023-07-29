import ButtonCta from "@/components/ui/button/ButtonCta"
import Image from "next/image"
import Link from "next/link"
import ButtonNormal from "@/components/ui/button/ButtonNormal"
import {
	ArrowRight,
	Code,
	DesignPencil,
	PcFirewall,
	Community,
	GraduationCap,
	Brain,
} from "iconoir-react"

export default function Home() {
	return (
		<main className="flex flex-col justify-between min-h-screen gap-64 my-52">
			<section className="flex flex-col items-center justify-center landing-page">
				<Image
					className="absolute z-10 hidden md:block"
					src="aurora.svg"
					width={1200}
					height={1200}
					alt="aurora background"
				/>
				<div className="flex flex-col gap-16">
					<div className="flex flex-col gap-12">
						<div className="z-20 hero-headline">
							<h1 className="font-bold text-center md:text-7xl md:leading-none">
								<span className="bg-gradient-to-br bg-clip-text from-white to-[#706F6C] text-transparent">
									Scaling New Horizons
									<br />
									With Our Expert
								</span>
								<br />
							</h1>
							<h1 className="flex flex-row items-center justify-center gap-4 font-bold text-center md:text-7xl md:leading-none">
								<span className="text-[#2CDA9D] w-[137px]">
									Dev
								</span>
								<span className="bg-gradient-to-br bg-clip-text from-white to-[#706F6C] text-transparent">
									Services
								</span>
							</h1>
						</div>
						<div className="z-20 hero-subheadline">
							<h2 className="font-medium text-white md:text-2xl md:leading-8">
								We aim to assist your business in advancing
								through technology.
							</h2>
						</div>
					</div>
					<div className="z-20 flex flex-row items-center justify-center gap-2 text-lg font-medium leading-7">
						<span>Press</span>
						<span className="flex items-center font-ibm-plexmono justify-center w-8 h-8 bg-gradient-to-br from-white to-[#706F6C] text-stone-700 rounded-md">
							C
						</span>
						<span>to contact us</span>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-start gap-8 projects">
				<h1 className="font-medium text-white uppercase md:text-xl md:leading-7">
					Projects
				</h1>
				<div className="flex flex-col gap-32">
					<div className="flex flex-col tob-brands">
						<div className="flex flex-col gap-16">
							<div className="flex flex-col gap-6">
								<h2 className="md:text-4xl md:leading-10 font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-[#8B5CF6]">
									Trusted by Top Brands Worldwide
								</h2>
								<p className="md:text-xl md:leading-7 font-normal text-zinc-400 w-[563px]">
									Empowering businesses globally with our
									proven expertise. Your success starts here.
								</p>
							</div>
							<Link
								href="https://www.cozylila.com"
								target="_blank"
								passHref
							>
								<Image
									src="cozylila.svg"
									width={150}
									height={64}
									alt="Cozylila logo"
								/>
							</Link>
						</div>
					</div>
					<div className="flex flex-col our-projects">
						<div className="flex flex-col gap-16">
							<div className="flex flex-col gap-6">
								<h2 className="md:text-4xl md:leading-10 font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-[#8B5CF6]">
									Discover Our Projects
								</h2>
								<p className="md:text-xl md:leading-7 font-normal text-zinc-400 w-[563px]">
									Explore our various inspiring journey that
									full of dedications to create innovative
									projects and solutions.
								</p>
								<ButtonNormal>
									<span>Discover our showcase</span>
									<ArrowRight />
								</ButtonNormal>
							</div>
							<div className="flex flex-col items-center justify-center gap-4 w-max">
								<Image
									className="items-center border-2 border-white rounded-2xl"
									src="/nuxtlabs.png"
									width={512}
									height={249}
									alt="projects"
								/>
								<div className="flex flex-col items-center justify-center">
									<h1 className="font-bold text-white md:text-xl md:leading-7">
										NuxtLabs: Your vision, today
									</h1>
									<Link
										href="https://nuxtlabs.com"
										target="_blank"
										passHref
									>
										<span className="text-base font-normal leading-6 text-blue-400 hover:border-b hover:border-blue-400">
											nuxtlabs.com
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-start gap-8 testimonials">
				<h1 className="font-medium text-white uppercase md:text-xl md:leading-7">
					Testimonials
				</h1>
				<div className="flex flex-col w-full gap-32">
					<div className="flex flex-col gap-16">
						<div className="flex flex-col gap-6">
							<h2 className="md:text-4xl md:leading-10 font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-[#8B5CF6] capitalize">
								What Our Client says
							</h2>
							<p className="md:text-xl md:leading-7 font-normal text-zinc-400 w-[563px]">
								Let our projects do the talking and witness the
								success stories yourself!
							</p>
						</div>
						<div className="flex flex-row w-full justify-between">
							<div className="flex flex-col items-start gap-6 client-testi w-[445px]">
								<p className="font-normal text-gray-300 md:text-lg md:leading-7">
									&#34;Team 37&#39;s services have been
									nothing short of exceptional! Their
									strategic insights and innovative solutions
									have propelled our company to new heights. A
									truly valuable partner for growth.&#34;
								</p>
								<div className="flex flex-row items-start gap-6">
									<Image
										className="rounded-full"
										src="/avatar.png"
										width={48}
										height={48}
										alt="Picture of client"
									/>
									<div>
										<h1 className="font-bold text-white capitalize md:text-lg md:leading-7">
											Rebecca Turner
										</h1>
										<h2 className="font-normal md:text-sm md:leading-5 text-stone-400">
											CFO of Cozylila
										</h2>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start gap-6 client-testi w-[445px]">
								<p className="font-normal text-gray-300 md:text-lg md:leading-7">
									&#34;Team 37&#39;s expertise has proven
									invaluable in optimizing our financial
									processes. Their data-driven approach and
									cost-saving strategies have significantly
									improved our bottom line.&#34;
								</p>
								<div className="flex flex-row items-start gap-6">
									<Image
										className="rounded-full"
										src="/avatar.png"
										width={48}
										height={48}
										alt="Picture of client"
									/>
									<div>
										<h1 className="font-bold text-white capitalize md:text-lg md:leading-7">
											Rebecca Turner
										</h1>
										<h2 className="font-normal md:text-sm md:leading-5 text-stone-400">
											CFO of Cozylila
										</h2>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start gap-6 client-testi w-[445px]">
								<p className="font-normal text-gray-300 md:text-lg md:leading-7">
									&#34;Working with Team 37 has been a
									game-changer for our HR department. Their
									talent acquisition and development solutions
									have brought in top-tier talent and enhanced
									our workforce capabilities.&#34;
								</p>
								<div className="flex flex-row items-start gap-6">
									<Image
										className="rounded-full"
										src="/avatar.png"
										width={48}
										height={48}
										alt="Picture of client"
									/>
									<div>
										<h1 className="font-bold text-white capitalize md:text-lg md:leading-7">
											Rebecca Turner
										</h1>
										<h2 className="font-normal md:text-sm md:leading-5 text-stone-400">
											CFO of Cozylila
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-start gap-8 testimonials">
				<h1 className="font-medium text-white w-full uppercase md:text-xl md:leading-7">
					Services
				</h1>
				<div className="flex flex-col gap-32 w-full">
					<div className="flex flex-col tob-brands">
						<div className="flex flex-col gap-16">
							<div className="flex flex-col gap-6">
								<h2 className="md:text-4xl md:leading-10 font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-[#8B5CF6] capitalize">
									Supercharged your business with us
								</h2>
								<p className="md:text-xl md:leading-7 font-normal text-zinc-400 w-[563px]">
									Discover your business&#39;s full potential
									with our expert solutions and dedicated
									team.
								</p>
								<ButtonNormal>
									<span>Learn more about our service</span>
									<ArrowRight />
								</ButtonNormal>
							</div>
							<div className="grid md:grid-cols-3 w-full items-center justify-between gap-8 align-middle">
								<div className="group w-[446px] overflow-hidden h-52 bg-neutral-900 transition-all duration-300 hover:bg-dev-card rounded-lg border px-6 border-neutral-400">
									<div className="flex flex-col justify-between align-middle w-full">
										<div className="flex flex-col items-end">
											<div className="text-transparent">
												abc
											</div>
											<div className="duration-300">
												<div className="w-[90px] h-[90px] bg-dev-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
												<Code
													fontWeight={6}
													width={96}
													height={96}
													className="z-20 text-zinc-800 mr-6 group-hover:text-dev-service relative bg-transparent"
												/>
											</div>
										</div>
										<div className="flex flex-col gap-4 transform translate-y-10 group-hover:-translate-y-1 duration-300">
											<Image
												src="37.dev.svg"
												width={128}
												height={29}
												alt="37.dev logo"
											/>
											<p className="w-64 md:text-base md:leading-6 font-medium text-zinc-300">
												Dream big, leave the details to
												us
											</p>
										</div>
									</div>
								</div>
								<div className="group w-[446px] overflow-hidden h-52 bg-neutral-900 transition-all duration-300 hover:bg-des-card rounded-lg border px-6 border-neutral-400">
									<div className="flex flex-col justify-between align-middle w-full">
										<div className="flex flex-col items-end">
											<div className="text-transparent">
												abc
											</div>
											<div className="duration-300">
												<div className="w-[90px] h-[90px] bg-des-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
												<DesignPencil
													fontWeight={6}
													width={96}
													height={96}
													className="z-20 text-zinc-800 mr-6 group-hover:text-des-service relative bg-transparent"
												/>
											</div>
										</div>
										<div className="flex flex-col gap-4 transform translate-y-10 group-hover:-translate-y-4 duration-300">
											<Image
												src="37.des.svg"
												width={128}
												height={29}
												alt="37.des logo"
											/>
											<p className="w-64 md:text-base md:leading-6 font-medium text-zinc-300">
												Express your creative sides and
												let us do the work
											</p>
										</div>
									</div>
								</div>
								<div className="group w-[446px] overflow-hidden h-52 bg-neutral-900 transition-all duration-300 hover:bg-sec-card rounded-lg border px-6 border-neutral-400">
									<div className="flex flex-col justify-between align-middle w-full">
										<div className="flex flex-col items-end">
											<div className="text-transparent">
												abc
											</div>
											<div className="duration-300">
												<div className="w-[90px] h-[90px] bg-sec-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
												<PcFirewall
													fontWeight={6}
													width={96}
													height={96}
													className="z-20 text-zinc-800 mr-6 group-hover:text-sec-service relative bg-transparent"
												/>
											</div>
										</div>
										<div className="flex flex-col gap-4 transform translate-y-10 group-hover:-translate-y-4 duration-300">
											<Image
												src="37.sec.svg"
												width={128}
												height={29}
												alt="37.sec logo"
											/>
											<p className="w-64 md:text-base md:leading-6 font-medium text-zinc-300">
												Keeping you one step ahead from
												the bad actor
											</p>
										</div>
									</div>
								</div>
								<div className="group w-[446px] overflow-hidden h-52 bg-neutral-900 transition-all duration-300 hover:bg-out-card rounded-lg border px-6 border-neutral-400">
									<div className="flex flex-col justify-between align-middle w-full">
										<div className="flex flex-col items-end">
											<div className="text-transparent">
												abc
											</div>
											<div className="duration-300">
												<div className="w-[90px] h-[90px] bg-out-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
												<Community
													fontWeight={6}
													width={96}
													height={96}
													className="z-20 text-zinc-800 mr-6 group-hover:text-out-service relative bg-transparent"
												/>
											</div>
										</div>
										<div className="flex flex-col gap-4 transform translate-y-10 group-hover:-translate-y-4 duration-300">
											<Image
												src="37.out.svg"
												width={128}
												height={29}
												alt="37.out logo"
											/>
											<p className="w-64 md:text-base md:leading-6 font-medium text-zinc-300">
												Leveraging external expertise
												for optimal performance
											</p>
										</div>
									</div>
								</div>
								<div className="group w-[446px] overflow-hidden h-52 bg-neutral-900 transition-all duration-300 hover:bg-edu-card rounded-lg border px-6 border-neutral-400">
									<div className="flex flex-col justify-between align-middle w-full">
										<div className="flex flex-col items-end">
											<div className="text-transparent">
												abc
											</div>
											<div className="duration-300">
												<div className="w-[90px] h-[90px] bg-edu-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
												<GraduationCap
													fontWeight={6}
													width={96}
													height={96}
													className="z-20 text-zinc-800 mr-6 group-hover:text-edu-service relative bg-transparent"
												/>
											</div>
										</div>
										<div className="flex flex-col gap-4 transform translate-y-10 group-hover:-translate-y-4 duration-300">
											<Image
												src="37.edu.svg"
												width={128}
												height={29}
												alt="37.edu logo"
											/>
											<p className="w-64 md:text-base md:leading-6 font-medium text-zinc-300">
												Freshen your knowledge to stay
												competitive in the industry
											</p>
										</div>
									</div>
								</div>
								<div className="group w-[446px] overflow-hidden h-52 bg-neutral-900 transition-all duration-300 hover:bg-ai-card rounded-lg border px-6 border-neutral-400">
									<div className="flex flex-col justify-between align-middle w-full">
										<div className="flex flex-col items-end">
											<div className="text-transparent">
												abc
											</div>
											<div className="duration-300">
												<div className="w-[90px] h-[90px] bg-ai-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
												<Brain
													fontWeight={6}
													width={96}
													height={96}
													className="z-20 text-zinc-800 mr-6 group-hover:text-ai-service relative bg-transparent"
												/>
											</div>
										</div>
										<div className="flex flex-col gap-4 transform translate-y-10 group-hover:-translate-y-4 duration-300">
											<Image
												src="37.ai.svg"
												width={100}
												height={29}
												alt="37.ai logo"
											/>
											<p className="w-64 md:text-base md:leading-6 font-medium text-zinc-300">
												Transform your workflow with the
												help of AI
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="relative w-full border-transparent banner bg-zinc-800 rounded-2xl">
				<div className="z-30 flex flex-col items-center justify-center w-full gap-12 py-12 align-middle">
					<Image
						className="absolute left-2 blur-lg w-fit h-fit"
						src="abstract.svg"
						width={128}
						height={128}
						alt="abstract"
					/>
					<Image
						className="absolute w-full opacity-10 h-fit rounded-2xl"
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
