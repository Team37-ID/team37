import { useEffect, useState } from "react"

interface Props {
    breakpoint: number
}

export const useMobileView = ({ breakpoint }: Props) => {
    const mobileBreakpoint = breakpoint
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
	}, [mobileBreakpoint])

    return { isMobileView }
}
