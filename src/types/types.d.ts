export type NavItemTypes = {
	title: string
	url?: string
	description?: string
	icon?: React.ReactNode
	subMenu?: NavItemTypes[]
	hasSubMenu?: boolean
	color?: string
}
