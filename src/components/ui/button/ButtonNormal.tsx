import React from "react"

interface Props {
	children: React.ReactNode
}

const ButtonNormal = ({ children }: Props) => {
	return (
		<button className="flex flex-row gap-2 bg-zinc-800 hover:bg-zinc-500 transition duration-300 ease-in-out px-4 py-2 rounded-lg w-max">
			{children}
		</button>
	)
}

export default ButtonNormal
