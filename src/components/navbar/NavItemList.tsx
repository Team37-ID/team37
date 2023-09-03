import Link from "next/link"

type NavItemProps = {
	children: React.ReactNode | Array<React.ReactElement>
}

const NavItemList = ({ children }: NavItemProps) => {
	return (
		<ul>
			<li className="flex flex-row gap-6">{children}</li>
		</ul>
	)
}

export default NavItemList
