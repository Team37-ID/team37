import Link from "next/link"
import Image from "next/image"
import { useMobileView } from "@/hooks/useMobileView"
import ButtonNormal from "@/components/ui/button/ButtonNormal"
import { ArrowRight } from "iconoir-react"

const Projects = () => {
	const { isMobileView } = useMobileView({ breakpoint: 763 })

	return (
		<>
			<h1 className="font-medium text-white uppercase text-sm leading-5 md:text-xl md:leading-7">
				Projects
			</h1>
			<div className="flex flex-col gap-8 md:gap-32">
				<div className="flex flex-col">
					<div className="flex flex-col gap-12 md:gap-16">
						<div className="flex flex-col gap-4 md:gap-6">
							<h2 className="text-lg leading-7 md:text-4xl md:leading-10 font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-[#8B5CF6]">
								Trusted by Top Brands Worldwide
							</h2>
							<p className="text-sm leading-5 md:text-xl md:leading-7 font-normal text-zinc-400 w-[327px] md:w-[563px]">
								Empowering businesses globally with our proven
								expertise. Your success starts here.
							</p>
						</div>
						<Link
							href="https://www.cozylila.com"
							target="_blank"
							passHref
						>
							<Image
								src="cozylila.svg"
								width={isMobileView ? 109 : 150}
								height={isMobileView ? 48 : 64}
								alt="Cozylila logo"
							/>
						</Link>
					</div>
				</div>
				<div className="flex flex-col our-projects">
					<div className="flex flex-col gap-16">
						<div className="flex flex-col gap-4 md:gap-6">
							<h2 className="md:text-4xl md:leading-10 font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-[#8B5CF6]">
								Discover Our Projects
							</h2>
							<p className="text-sm md:text-xl md:leading-7 font-normal text-zinc-400 w-[327px] md:w-[563px]">
								Explore our various inspiring journey that full
								of dedications to create innovative projects and
								solutions.
							</p>
							<ButtonNormal>
								<span className="text-sm leading-5 font-medium md:text-lg md:leading-7 text-white">
									Discover our showcase
								</span>
								<ArrowRight />
							</ButtonNormal>
						</div>
						<div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-center items-center align-middle">
							<div className="flex flex-col items-center justify-center gap-4 w-max">
								<Image
									className="items-center border-2 border-white rounded-2xl"
									src="/nuxtlabs.png"
									width={isMobileView ? 309 : 512}
									height={isMobileView ? 150 : 249}
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
							<div className="flex flex-col items-center justify-center gap-4 w-max">
								<Image
									className="items-center border-2 border-white rounded-2xl"
									src="/nuxtlabs.png"
									width={isMobileView ? 309 : 512}
									height={isMobileView ? 150 : 249}
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
							<div className="flex flex-col items-center justify-center gap-4 w-max">
								<Image
									className="items-center border-2 border-white rounded-2xl"
									src="/nuxtlabs.png"
									width={isMobileView ? 309 : 512}
									height={isMobileView ? 150 : 249}
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
			</div>
		</>
	)
}

export default Projects
