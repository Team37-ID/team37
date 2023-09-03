import React from "react"

type Props = {
	children: React.ReactNode
}

const ButtonNavBar = ({ children }: Props) => {
	return (
		<button className="text-lg px-4 py-2 leading-7 font-medium text-white duration-300 hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-[#8B5CF6] hover:text-transparent after:block after:border after:border-blue-500 after:transition-transform after:duration-300 after:scale-x-0 after:hover:scale-x-100 after:origin-right after:hover:origin-left">
			{children}
		</button>
	)
}

export default ButtonNavBar
