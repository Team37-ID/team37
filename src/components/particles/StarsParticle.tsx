import { FC, useCallback, useMemo } from "react"
import type { Engine, ISourceOptions, Container } from "tsparticles-engine"
import Particles from "react-tsparticles"
import { loadStarsPreset } from "tsparticles-preset-stars"

type Props = {
	id: string
}

const StarsParticle: FC<Props> = ({ id }) => {
	const options: ISourceOptions = useMemo(() => {
		return {
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
