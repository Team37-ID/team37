import Image from "next/image"

type LogoProps = {
	width: number
	height: number
}

const Team37Logo = ({ width, height }: LogoProps) => {
	return (
		<Image
			src="team37-logo.svg"
			alt="Team 37 logo"
			width={150}
			height={150}
		/>
	)
}

export default Team37Logo
