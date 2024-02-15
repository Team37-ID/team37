import Spotlight from "@/components/ui/spotlight"
import React, { ReactNode } from "react"

type LandingPageProps = {
	className?: string
	children?: ReactNode
}

const LandingPage = ({ className, children }: LandingPageProps) => {
	return (
		<>
			<div className="box-grid absolute top-0 z-0" />
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20 z-10"
				fill="white"
			/>
			<div className=" p-4 max-w-7xl mx-auto z-20 w-full pt-20 md:pt-0">
				<h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
					Spotlight <br /> is the new trend.
				</h1>
				<p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
					Spotlight effect is a great way to draw attention to a
					specific part of the page. Here, we are drawing the
					attention towards the text section of the page. I don&apos;t
					know why but I&apos;m running out of copy.
				</p>
			</div>
		</>
	)
}

export default LandingPage
