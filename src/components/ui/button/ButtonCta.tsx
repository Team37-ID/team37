import React from "react"

interface Props {
	children: React.ReactNode
}

const ButtonCta = ({ children }: Props) => {
	return (
		<div className="relative">
			<div className="inset-0 bg-gradient-to-r p-[2px] mx-auto from-blue-500 to-[#8B5CF6] rounded-lg">
				<button className="bg-zinc-800 px-4 py-2 rounded-lg inline-flex justify-center items-center font-medium text-lg leading-7 transition duration-300 drop-shadow-glow-sm hover:transition hover:duration-300 hover:drop-shadow-glow-lg hover:bg-zinc-900">
					{children}
				</button>
			</div>
		</div>
	)
}

export default ButtonCta
