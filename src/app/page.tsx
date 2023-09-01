"use client"

import LandingPage from "@/components/content/home/LandingPage"
import Projects from "@/components/content/home/team37-project/Projects"
import Testimonials from "@/components/content/home/team37-testimonials/Testimonials"
import Services from "@/components/content/home/team37-services/Services"
import Jargon from "@/components/content/home/Jargon"

export default function Home() {
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
				<Jargon />
			</section>
		</main>
	)
}
