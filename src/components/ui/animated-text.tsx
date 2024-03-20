"use client"
import { motion } from "framer-motion"

const AnimatedText = () => {
	return (
		<motion.div>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Hello World
			</motion.h1>
		</motion.div>
	)
}

export default AnimatedText
