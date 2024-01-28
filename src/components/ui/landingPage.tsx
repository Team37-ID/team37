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
			{children}
		</>
	)
}

export default LandingPage
