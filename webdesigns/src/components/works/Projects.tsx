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
		<main ref={container} className="relative bg-[#0c0c0c]" id="proyectos">
			<div className="my-4 flex flex-col items-center mx-auto text-white text-3xl border-gray-500 pt-6">
				<span className="2xl:text-[85px] xl:text-[60px] md:text-[50px] max-md:text-[35px] leading-none uppercase font-light">Nuestros</span>
				<span className="2xl:text-[85px] xl:text-[60px] md:text-[50px] max-md:text-[35px] leading-none uppercase font-bold">Trabajos</span>
				<p className="w-[350px] text-lg max-md:px-3 text-center mt-5 text-[#777777]">
					We develop gorgeous and memorable projects for our clients.{' '}
				</p>
			</div>
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
