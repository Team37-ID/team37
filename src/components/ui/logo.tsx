"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

type LogoProps = {
	height?: number
	width?: number
}

const Logo = ({ height = 128, width = 128 }: LogoProps) => {
	const { theme } = useTheme()
	const src = theme === "dark" ? "logo-white.svg" : "logo-black.svg"

	return <Image src={src} alt="Team 37 Logo" height={height} width={width} />
}

export default Logo
