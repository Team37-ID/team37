"use client"

import React, { useState, useEffect } from "react"

interface NavBarProps {
	children: React.ReactNode
}

const NavBar = ({ children }: NavBarProps) => {
	const [scrollBackground, setScrollBackground] = useState("bg-transparent")

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY

			const threshold = 100

			if (scrollPosition > threshold) {
				setScrollBackground(
					"bg-gradient-to-br from-glassmorphism-38 to-glassmorphism-08 to-white opacity-4 stroke-[#202020] backdrop-blur-xl z-100"
				)
			} else {
				setScrollBackground("bg-transparent")
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<nav
			className={`fixed w-full max-w-8xl top-0 flex flex-row items-center justify-between align-middle z-50 py-6 bg-transparent border-b-[1px] border-b-[#202020] ${scrollBackground}`}
		>
			{children}
		</nav>
	)
}

export default NavBar
