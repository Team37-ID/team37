import React from "react"

interface NavBarProps {
	children: React.ReactNode
}

const NavBar = ({ children }: NavBarProps) => {
	return (
		<nav className="flex flex-row items-center justify-between align-middle z-10 p-6 bg-transparent border-b-[1px] border-b-[#202020]">
			{children}
		</nav>
	)
}

export default NavBar
