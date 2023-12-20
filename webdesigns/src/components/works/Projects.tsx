'use client'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/utils/data'
import Card from './Card'

const Project: React.FC = () => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	})

	return (
		<main ref={container} className="relative bg-[#0d0d0d]" id="proyectos">
			{projects.map((project, i) => {
				const targetScale = 1 - (projects.length - i) * 0.1
				return (
					<Card
						title={project.title}
						src={project.src}
						key={`p_${i}`}
						i={i}
						url={project.link}
						description={project.description}
						progress={scrollYProgress}
						range={[i * 0.25, 1]}
						targetScale={targetScale}
					/>
				)
			})}
		</main>
	)
}
export default Project
