"use client"

import Projects from "@/components/content/home/team37-project/Projects"
import Testimonials from "@/components/content/home/team37-testimonials/Testimonials"
import Services from "@/components/content/home/team37-services/Services"
import Jargon from "@/components/content/home/Jargon"
import LandingPage from "@/components/content/home/LandingPage"
import dynamic from "next/dynamic"

const Projects = dynamic(
	() => import("@/components/content/home/team37-project/Projects")
)

const Testimonials = dynamic(
	() => import("@/components/content/home/team37-testimonials/Testimonials")
)

const Services = dynamic(
	() => import("@/components/content/home/team37-services/Services")
)

const Jargon = dynamic(() => import("@/components/content/home/Jargon"))

export default function Home() {
	return (
    <main className="flex flex-col justify-between min-h-screen gap-64 my-64 mx-4 md:my-96">
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
