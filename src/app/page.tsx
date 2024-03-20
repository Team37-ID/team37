"use client"

import AnimatedText from "@/components/ui/animated-text"
import { Hero } from "@/components/ui/hero"
import ShaderBackground from "@/components/ui/shader-background"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-transparent dark:bg-black">
			<div className="absolute w-full h-full">
				<ShaderBackground />
			</div>
			<span className="flex flex-col gap-4 md:items-start border-4 w-full z-20">
				<Hero>
					<Hero.Title>
						<AnimatedText />
					</Hero.Title>
					<p className="text-4xl font-manrope font-light text-black dark:text-white">
						We are a one-stop digital solution for all your business
						needs.
					</p>
				</Hero>
			</span>
		</main>
	)
}
