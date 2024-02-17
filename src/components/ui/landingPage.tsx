"use client"

import Spotlight from "@/components/ui/spotlight"
import { motion } from "framer-motion"
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
			<div className="flex flex-col gap-4 p-4 max-w-7xl mx-auto z-20 w-full pt-20 md:pt-0">
				<motion.div
					animate={{ y: 0, opacity: 1 }}
					initial={{ y: 20, opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<h1 className="captialize text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
						Innovation
					</h1>
				</motion.div>
				<motion.div
					animate={{ y: 0, opacity: 1 }}
					initial={{ y: 20, opacity: 0 }}
					transition={{ duration: 0.5, delay: 1.0 }}
				>
					<h1 className="captialize text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
						Meets Excelence
					</h1>
				</motion.div>
				<motion.div
					animate={{ y: 0, opacity: 1 }}
					initial={{ y: 20, opacity: 0 }}
					transition={{ duration: 0.5, delay: 1.5 }}
				>
					<p className="font-normal text-sm md:text-base text-neutral-300 max-w-lg text-center mx-auto">
						Comprehensive suite of services tailored to meet your
						business needs, empowering you to thrive in the digital
						age.
					</p>
				</motion.div>
			</div>
		</>
	)
}

export default LandingPage
