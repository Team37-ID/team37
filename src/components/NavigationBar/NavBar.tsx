"use client"

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react"
import React, { useState } from "react"
import { NAV_ITEMS } from "./itemsList"
import Team37Logo from "@/components/logo/Team37Logo"
import ButtonNavBar from "@/components/ui/button/ButtonNavBar"
import ButtonCta from "@/components/ui/button/ButtonCta"
import Link from "next/link"

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<Navbar
			isBordered
			maxWidth="2xl"
			className="fixed bg-gradient-to-br from-glassmorphism-38 to-glassmorphism-08 stroke-[#202020] backdrop-blur-xl z-50 py-2 "
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Team37Logo width={150} height={150} />
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="hidden sm:flex gap-4">
				{NAV_ITEMS.map((item, index) => (
					<NavbarItem key={`${item}-${index}`}>
						<ButtonNavBar>
							<Link href={`${item.href}`}>{item.label}</Link>
						</ButtonNavBar>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<ButtonCta>Contact us</ButtonCta>
			</NavbarContent>
			<NavbarMenu className="z-50">
				{NAV_ITEMS.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<ButtonNavBar>
							<Link href={`${item.href}`}>{item.label}</Link>
						</ButtonNavBar>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}

export default NavBar
