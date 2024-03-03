"use client"

import { cn } from "@/lib/utils"
import { easeOut, motion, useInView } from "framer-motion"
import { useId, useRef } from "react"

type AnimatedTextProps = {
	text: string | string[]
	el?: keyof JSX.IntrinsicElements
	className?: string
	once?: boolean
}

const AnimatedText = ({
	text,
	el: Wrapper = "p",
	className,
	once,
}: AnimatedTextProps) => {
	const id = useId()
	const ref = useRef(null)
	const isInView = useInView(ref, { once: once, amount: 0.5 })
	const textArray = Array.isArray(text) ? text : [text]
	const defaultAnimations = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	}
	const transition = {
		staggerChildren: 0.05,
		delayChildren: 0.4,
		easeOut,
		type: "spring",
		bounce: 1,
		mass: 1.5,
	}

	return (
		<Wrapper
			className={cn(
				"text-base text-black dark:text-white font-normal",
				className,
			)}
		>
			<span className="sr-only">{text}</span>
			<motion.span
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				transition={transition}
				ref={ref}
			>
				{textArray.map((line) => (
					<span key={`${id}-${line}`} className="block">
						{line.split(" ").map((word) => (
							<span
								key={`${id}-${word}`}
								className="inline-block"
							>
								{word.split("").map((char) => (
									<motion.span
										key={`${id}-${char}`}
										variants={defaultAnimations}
										className="inline-block"
									>
										{char}
									</motion.span>
								))}
								<span className="inline-block">&nbsp;</span>
							</span>
						))}
					</span>
				))}
			</motion.span>
		</Wrapper>
	)
}

export default AnimatedText
