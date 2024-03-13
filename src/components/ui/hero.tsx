import Image from "next/image"

type HeroProps = {
	children: React.ReactNode
}

type HeroComponentsProps = {
	Title?: React.ReactNode | string
	Subtitle?: React.ReactNode | string
	Img?: ImgProps
}

type ImgProps = {
	src: string
	alt: string
	width?: number | undefined
	height?: number | undefined
}

export const Hero = ({ children }: HeroProps & HeroComponentsProps) => {
	return <>{children}</>
}

Hero.Title = function HeroTitle({
	children,
}: { children: React.ReactNode | string }) {
	return <>{children}</>
}

Hero.Subtitle = function HeroSubtitle({
	children,
}: { children: React.ReactNode | string }) {
	return <>{children}</>
}

Hero.Img = function HeroImg({ src, alt, width, height }: ImgProps) {
	return <Image src={src} alt={alt} width={width} height={height} />
}
