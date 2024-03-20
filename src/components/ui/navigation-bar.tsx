"use client"

import Logo from "@/components/ui/logo"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import * as Switch from "@radix-ui/react-switch"
import { useTheme } from "next-themes"

const NavigationBar = () => {
	const { theme, setTheme, resolvedTheme } = useTheme()

	return (
		<>
			<div className="absolute top-0 z-50 w-full">
				<header className="flex flex-row justify-between items-center z-50 mx-64 mt-4 bg-[#D8D8D8]/20 border-gray-300 border backdrop-blur-md py-2 px-4 rounded-full">
					<Logo height={96} width={96} />
					<Switch.Root
						value={resolvedTheme}
						checked={resolvedTheme === "dark"}
						onCheckedChange={(isChecked) =>
							setTheme(isChecked ? "dark" : "light")
						}
						className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
					>
						<Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
					</Switch.Root>
				</header>
			</div>
		</>
	)
}

export default NavigationBar
