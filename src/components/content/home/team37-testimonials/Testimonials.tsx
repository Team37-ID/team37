import { useMobileView } from "@/hooks/useMobileView"
import { Avatar } from "@nextui-org/react"
import Image from "next/image"
import Carousel from "nuka-carousel"

const Testimonials = () => {
	const { isMobileView } = useMobileView({ breakpoint: 763 })

	return (
		<>
			<h1 className="font-medium text-white uppercase text-sm leading-5 md:text-xl md:leading-7">
				Testimonials
			</h1>
			<div className="flex flex-col w-full gap-32">
				<div className="flex flex-col gap-12 md:gap-16">
					<div className="flex flex-col gap-4 md:gap-6">
						<h2 className="text-lg leading-7 md:text-4xl md:leading-10 font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-[#8B5CF6] capitalize">
							What Our Client says
						</h2>
						<p className="text-sm leading-5 md:text-xl md:leading-7 font-normal text-zinc-400 w-[327px] md:w-[563px]">
							Let our projects do the talking and witness the
							success stories yourself!
						</p>
					</div>
					<Carousel swiping autoplay withoutControls>
						<div className="flex flex-col items-center align-middle md:flex-row w-full gap-6 md:justify-between">
							<div className="flex flex-col items-center md:items-start gap-6 client-testi w-[327px] md:w-[445px]">
								<p className="font-normal text-gray-300 text-sm leading-5 text-center md:text-left md:text-lg md:leading-7">
									&#34;Buat Team 37, bagus banget buat
									designnya sesuai dengan kemauan customer.
									Sabar banget ngadepin revisinya hehe. Sangat
									recommend buat design di Team 37 👌🏻👍🏻.
									Thanks yaa..&#34;
								</p>
								<div className="flex flex-row items-center align-midle justify-center md:items-start gap-4 md:gap-6">
									<Avatar
										showFallback
										src="https://images.unsplash.com/broken"
										alt="Picture of client"
									/>
									<div>
										<h1 className="font-bold text-base leading-6 text-white capitalize md:text-lg md:leading-7">
											Al Hakim Saipul Mujab
										</h1>
										<h2 className="font-normal text-xs leading-4 md:text-sm md:leading-5 text-stone-400">
											Mondasari Bakery
										</h2>
									</div>
								</div>
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</>
	)
}

export default Testimonials
