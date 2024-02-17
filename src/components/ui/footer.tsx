"use client"

import Logo from "@/components/ui/logo"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip"
import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Tiktok, X } from "iconoir-react"
import Link from "next/link"

const Footer = () => {
	return (
		<footer className="bg-black px-8 py-4 z-50 gap-6 flex flex-col-reverse md:flex-row justify-between">
			<div className="flex flex-row items-center justify-center gap-2">
				<Logo height={80} width={80} />
				<p className="text-gray-500 font-normal text-sm">
					© 2024 Team 37. All rights reserved.
				</p>
			</div>
			<div className="flex flex-row items-center justify-center gap-8">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href="https://twitter.com/team37_id"
								passHref
								target="_blank"
							>
								<motion.div
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.2 }}
								>
									<X className="text-white" />
								</motion.div>
							</Link>
						</TooltipTrigger>
						<TooltipContent className="text-black bg-white p-2 font-normal text-sm rounded-sm">
							<p>X/Twitter</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href="https://github.com/Team37-ID"
								passHref
								target="_blank"
							>
								<motion.div
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.2 }}
								>
									<Github className="text-white" />
								</motion.div>
							</Link>
						</TooltipTrigger>
						<TooltipContent className="text-black bg-white p-2 font-normal text-sm rounded-sm">
							<p>GitHub</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href="https://www.linkedin.com/company/team-37-id"
								passHref
								target="_blank"
							>
								<motion.div
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.2 }}
								>
									<Linkedin className="text-white" />
								</motion.div>
							</Link>
						</TooltipTrigger>
						<TooltipContent className="text-black bg-white p-2 font-normal text-sm rounded-sm">
							<p>LinkedIn</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href="https://instagram.com/team37_id"
								passHref
								target="_blank"
							>
								<motion.div
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.2 }}
								>
									<Instagram className="text-white" />
								</motion.div>
							</Link>
						</TooltipTrigger>
						<TooltipContent className="text-black bg-white p-2 font-normal text-sm rounded-sm">
							<p>Instagram</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href="https://tiktok.com/@team37.id"
								passHref
								target="_blank"
							>
								<motion.div
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 1.2 }}
								>
									<Tiktok className="text-white" />
								</motion.div>
							</Link>
						</TooltipTrigger>
						<TooltipContent className="text-black bg-white p-2 font-normal text-sm rounded-sm">
							<p>TikTok</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</footer>
	)
}

export default Footer
