import CtaCard from "@/components/ui/cta-card"
import LandingPage from "@/components/ui/landingPage"
import "@/styles/magicPattern.css"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-3.5 bg-black">
			<LandingPage />
			<CtaCard />
		</main>
	)
}
