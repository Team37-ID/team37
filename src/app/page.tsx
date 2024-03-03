import AnimatedText from "@/components/ui/animated-text"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
			<span className="flex flex-col gap-4 md:items-start border-4 w-full">
				<AnimatedText
					text={["You", "Found Us!"]}
					className="md:text-[12rem] text-6xl font-light tracking-tighter capitalize font-chivo-mono"
				/>
				<p className="text-4xl font-manrope font-light text-black dark:text-white">
					We are a one-stop digital solution for all your business
					needs.
				</p>
			</span>
		</main>
	)
}
