"use client"

import Image from "next/image"
import Link from "next/link"

type LogoProps = {
	width?: number
	height?: number
}

const Logo = ({ width, height }: LogoProps) => {
	return (
		<div>
			<Link href="/">
				<Image
					src="/logo.svg"
					alt="Logo"
					width={width ?? 100}
					height={height ?? 100}
				/>
			</Link>
		</div>
	)
}

export default Logo
