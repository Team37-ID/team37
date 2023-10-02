import Link from "next/link"
import Image from "next/image"
import { useMobileView } from "@/hooks/useMobileView"
import ButtonNormal from "@/components/ui/button/ButtonNormal"
import { ArrowRight } from "iconoir-react"
import Marquee from "react-fast-marquee"
import Carousel from "nuka-carousel"

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
						<div className="left-0">
							<Marquee
								pauseOnHover
								gradient
								gradientColor="#000000"
							>
								<div className="flex align-middle justify-center items-center space-x-36 mx-8">
									<Link
										href="https://www.instagram.com/mondasari_bakery/"
										target="_blank"
										passHref
									>
										<Image
											src="mondasari.svg"
											width={isMobileView ? 109 : 150}
											height={isMobileView ? 48 : 64}
											alt="Mondasari Bakery logo"
										/>
									</Link>
									<p className="text-white opacity-40 font-bold text-center text-4xl">
										YOUR BRAND HERE
									</p>
									<p className="text-white opacity-40 font-bold text-center text-4xl">
										YOUR BRAND HERE
									</p>
									<p className="text-white opacity-40 font-bold text-center text-4xl">
										YOUR BRAND HERE
									</p>
								</div>
							</Marquee>
						</div>
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
						<Carousel swiping autoplay withoutControls>
							<div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-start items-start align-middle">
								<div className="flex flex-col items-center justify-center gap-4 w-max">
									<Image
										className="items-center border-2 border-white rounded-2xl object-cover h-64"
										src="/1080.png"
										width={isMobileView ? 309 : 450}
										height={isMobileView ? 150 : 250}
										alt="projects"
										loading="lazy"
									/>
									<div className="flex flex-col items-center justify-center">
										<h1 className="font-bold text-white md:text-xl md:leading-7">
											Mondasari Bakery
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
						</Carousel>
					</div>
				</div>
			</div>
		</>
	)
}

export default Projects
