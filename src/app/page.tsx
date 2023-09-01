"use client"

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
import { useEffect, useState } from "react"
import LandingPage from "@/components/content/home/LandingPage"
import Projects from "@/components/content/home/team37-project/Projects"
import Testimonials from "@/components/content/home/team37-testimonials/Testimonials"
import Services from "@/components/content/home/team37-services/Services"

export default function Home() {
	const mobileBreakpoint = 763
	const [isMobileView, setMobileView] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setMobileView(window.innerWidth < mobileBreakpoint)
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<main className="flex flex-col justify-between min-h-screen gap-64 my-64 mx-7 md:my-72">
			<section className="flex flex-col items-center justify-center landing-page">
				<LandingPage />
			</section>
			<section className="flex flex-col items-start gap-8 projects overflow-hidden z-40">
				<Projects />
			</section>
			<section className="flex flex-col items-start gap-8 testimonials z-40">
				<Testimonials />
			</section>
			<section className="flex flex-col items-start gap-8 services z-40">
				<Services />
			</section>
			<section className="relative border-transparent banner bg-zinc-800 rounded-2xl overflow-hidden">
				<div className="z-30 flex flex-col items-center justify-center gap-12 py-12 align-middle">
					<Image
						className="absolute left-2 blur-lg w-fit h-fit"
						src="abstract.svg"
						width={128}
						height={128}
						alt="abstract"
					/>
					<Image
						className="absolute object-cover top-0 left-0 opacity-10 w-full h-full"
						src="noise.svg"
						width={2048}
						height={2048}
						alt="abstract"
					/>
					<Image
						className="z-30"
						src="team37-logo.svg"
						alt="Team 37 logo"
						width={isMobileView ? 99 : 150}
						height={isMobileView ? 16 : 150}
					/>
					<span className="flex flex-col z-30 align-middle items-center justify-center text-5xl md:text-7xl leading-none font-bold bg-gradient-to-br bg-clip-text text-transparent from-white to-[#706F6C]">
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
