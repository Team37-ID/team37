import { FC, useCallback, useMemo } from "react"
import type { Engine, ISourceOptions, Container } from "tsparticles-engine"
import { loadFull } from "tsparticles"
import Particles from "react-tsparticles"
import { loadStarsPreset } from "tsparticles-preset-stars"

type Props = {
	id: string
}

const StarsParticle: FC<Props> = ({ id }) => {
	const options: ISourceOptions = useMemo(() => {
		return {
			// particles: {
			// 	move: {
			// 		direction: "none",
			// 		enable: true,
			// 		outModes: {
			// 			default: "out",
			// 		},
			// 		random: true,
			// 		speed: 0.1,
			// 		straight: false,
			// 	},
			// 	color: {
			// 		value: "#FFFFFF",
			// 	},
			// 	opacity: {
			// 		animation: {
			// 			enable: true,
			// 			speed: 1,
			// 			sync: false,
			// 		},
			// 		value: { min: 0, max: 1 },
			// 	},
			// 	size: {
			// 		value: { min: 1, max: 3 },
			// 	},
			// },
			// fullScreen: {
			// 	enable: true,
			// 	zIndex: 0,
			// },
			preset: "stars",
		}
	}, [])

	const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
		await loadStarsPreset(engine)
	}, [])

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			console.log(container)
		},
		[]
	)

	return (
		<Particles
			id={id}
			init={particlesInit}
			loaded={particlesLoaded}
			options={options}
		/>
	)
}

export default StarsParticle
