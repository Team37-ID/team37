export type NavTypes = {
	label: string
	children?: NavTypes[]
	href?: string
	target?: string
}

export type ContactTypes = {
	label: string
	href?: string
	target?: string
	icon: any
	isDisabled?: boolean
}

export type SocialMediaTypes = {
	href?: string
	target?: string
	icon: any
	isDisabled?: boolean
}
