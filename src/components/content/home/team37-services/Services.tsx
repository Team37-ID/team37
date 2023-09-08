import ButtonNormal from "@/components/ui/button/ButtonNormal"
import Image from "next/image"
import { useMobileView } from "@/hooks/useMobileView"
import {
	ArrowRight,
	Code,
	DesignPencil,
	PcFirewall,
	Community,
	GraduationCap,
	Brain,
} from "iconoir-react"
const Services = () => {
	const { isMobileView } = useMobileView({ breakpoint: 763 })

	return (
		<>
			<h1 className="font-medium text-white uppercase text-sm leading-5 md:text-xl md:leading-7">
				Services
			</h1>
			<div className="flex flex-col gap-32 w-full">
				<div className="flex flex-col">
					<div className="flex flex-col gap-16">
						<div className="flex flex-col gap-4 md:gap-6">
							<h2 className="text-lg leading-7 md:text-4xl md:leading-10 font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-[#8B5CF6] capitalize">
								Supercharged your business with us
							</h2>
							<p className="text-sm leading-5 md:text-xl md:leading-7 font-normal text-zinc-400 w-[327px] md:w-[563px]">
								Discover your business&#39;s full potential with
								our expert solutions and dedicated team.
							</p>
							<ButtonNormal>
								<span className="text-sm leading-5 font-medium md:text-lg md:leading-7 text-white">
									Learn more about our service
								</span>
								<ArrowRight />
							</ButtonNormal>
						</div>
						<div className="grid md:grid-cols-3 w-full items-center justify-between gap-8 align-middle">
							<div className="group w-[327px] md:w-[446px] overflow-hidden h-[150px] md:h-52 bg-neutral-900 transition-all duration-300 hover:bg-dev-card rounded-lg border px-6 border-neutral-400">
								<div className="flex flex-col justify-between align-middle w-full">
									<div className="flex flex-col items-end">
										<div className="text-transparent">
											abc
										</div>
										<div className="duration-300">
											<div className="w-[90px] h-[90px] bg-dev-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
											<Code
												fontWeight={6}
												width={isMobileView ? 63 : 96}
												height={isMobileView ? 63 : 96}
												className="z-20 text-zinc-800 mr-6 group-hover:text-dev-service relative bg-transparent"
											/>
										</div>
									</div>
									<div className="flex flex-col gap-4 transform translate-y-5 md:translate-y-10 group-hover:-translate-y-5 duration-300">
										<Image
											src="37.dev.svg"
											width={128}
											height={29}
											alt="37.dev logo"
										/>
										<p className="w-[248px] text-xs leading-4 md:text-base md:leading-6 font-medium text-zinc-300">
											Dream big, leave the details to us
										</p>
									</div>
								</div>
							</div>
							<div className="group w-[327px] md:w-[446px] overflow-hidden h-[150px] md:h-52 bg-neutral-900 transition-all duration-300 hover:bg-des-card rounded-lg border px-6 border-neutral-400">
								<div className="flex flex-col justify-between align-middle w-full">
									<div className="flex flex-col items-end">
										<div className="text-transparent">
											abc
										</div>
										<div className="duration-300">
											<div className="w-[90px] h-[90px] bg-des-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
											<DesignPencil
												fontWeight={6}
												width={isMobileView ? 63 : 96}
												height={isMobileView ? 63 : 96}
												className="z-20 text-zinc-800 mr-6 group-hover:text-des-service relative bg-transparent"
											/>
										</div>
									</div>
									<div className="flex flex-col gap-4 transform translate-y-5 md:translate-y-10 group-hover:-translate-y-5 duration-300">
										<Image
											src="37.des.svg"
											width={128}
											height={29}
											alt="37.des logo"
										/>
										<p className="w-[248px] text-xs leading-4 md:text-base md:leading-6 font-medium text-zinc-300">
											Express your creative sides and let
											us do the work
										</p>
									</div>
								</div>
							</div>
							<div className="group w-[327px] md:w-[446px] overflow-hidden h-[150px] md:h-52 bg-neutral-900 transition-all duration-300 hover:bg-sec-card rounded-lg border px-6 border-neutral-400">
								<div className="flex flex-col justify-between align-middle w-full">
									<div className="flex flex-col items-end">
										<div className="text-transparent">
											abc
										</div>
										<div className="duration-300">
											<div className="w-[90px] h-[90px] bg-sec-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
											<PcFirewall
												fontWeight={6}
												width={isMobileView ? 63 : 96}
												height={isMobileView ? 63 : 96}
												className="z-20 text-zinc-800 mr-6 group-hover:text-sec-service relative bg-transparent"
											/>
										</div>
									</div>
									<div className="flex flex-col gap-4 transform translate-y-5 md:translate-y-10 group-hover:-translate-y-5 duration-300">
										<Image
											src="37.sec.svg"
											width={128}
											height={29}
											alt="37.sec logo"
										/>
										<p className="w-[248px] text-xs leading-4 md:text-base md:leading-6 font-medium text-zinc-300">
											Keeping you one step ahead from the
											bad actor
										</p>
									</div>
								</div>
							</div>
							<div className="group w-[327px] md:w-[446px] overflow-hidden h-[150px] md:h-52 bg-neutral-900 transition-all duration-300 hover:bg-out-card rounded-lg border px-6 border-neutral-400">
								<div className="flex flex-col justify-between align-middle w-full">
									<div className="flex flex-col items-end">
										<div className="text-transparent">
											abc
										</div>
										<div className="duration-300">
											<div className="w-[90px] h-[90px] bg-out-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
											<Community
												fontWeight={6}
												width={isMobileView ? 63 : 96}
												height={isMobileView ? 63 : 96}
												className="z-20 text-zinc-800 mr-6 group-hover:text-out-service relative bg-transparent"
											/>
										</div>
									</div>
									<div className="flex flex-col gap-4 transform translate-y-5 md:translate-y-10 group-hover:-translate-y-5 duration-300">
										<Image
											src="37.out.svg"
											width={128}
											height={29}
											alt="37.out logo"
										/>
										<p className="w-[248px] text-xs leading-4 md:text-base md:leading-6 font-medium text-zinc-300">
											Leveraging external expertise for
											optimal performance
										</p>
									</div>
								</div>
							</div>
							<div className="group w-[327px] md:w-[446px] overflow-hidden h-[150px] md:h-52 bg-neutral-900 transition-all duration-300 hover:bg-edu-card rounded-lg border px-6 border-neutral-400">
								<div className="flex flex-col justify-between align-middle w-full">
									<div className="flex flex-col items-end">
										<div className="text-transparent">
											abc
										</div>
										<div className="duration-300">
											<div className="w-[90px] h-[90px] bg-edu-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
											<GraduationCap
												fontWeight={6}
												width={isMobileView ? 63 : 96}
												height={isMobileView ? 63 : 96}
												className="z-20 text-zinc-800 mr-6 group-hover:text-edu-service relative bg-transparent"
											/>
										</div>
									</div>
									<div className="flex flex-col gap-4 transform translate-y-5 md:translate-y-10 group-hover:-translate-y-5 duration-300">
										<Image
											src="37.edu.svg"
											width={128}
											height={29}
											alt="37.edu logo"
										/>
										<p className="w-[248px] text-xs leading-4 md:text-base md:leading-6 font-medium text-zinc-300">
											Freshen your knowledge to stay
											competitive in the industry
										</p>
									</div>
								</div>
							</div>
							<div className="group w-[327px] md:w-[446px] overflow-hidden h-[150px] md:h-52 bg-neutral-900 transition-all duration-300 hover:bg-ai-card rounded-lg border px-6 border-neutral-400">
								<div className="flex flex-col justify-between align-middle w-full">
									<div className="flex flex-col items-end">
										<div className="text-transparent">
											abc
										</div>
										<div className="duration-300">
											<div className="w-[90px] h-[90px] bg-ai-service rounded-full absolute z-10 blur-2xl hidden group-hover:block"></div>
											<Brain
												fontWeight={6}
												width={isMobileView ? 63 : 96}
												height={isMobileView ? 63 : 96}
												className="z-20 text-zinc-800 mr-6 group-hover:text-ai-service relative bg-transparent"
											/>
										</div>
									</div>
									<div className="flex flex-col gap-4 transform translate-y-5 md:translate-y-10 group-hover:-translate-y-5 duration-300">
										<Image
											src="37.ai.svg"
											width={100}
											height={29}
											alt="37.ai logo"
										/>
										<p className="w-[248px] text-xs leading-4 md:text-base md:leading-6 font-medium text-zinc-300">
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
		</>
	)
}

export default Services
