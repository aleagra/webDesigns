'use client'
import { useScroll, motion } from 'framer-motion'
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
		<main ref={container} className="relative bg-[#0c0c0c] scroll-mt-10" id="works">
			{/* ── Section Header (Synchronized) ───────────────────────── */}
			<div className="pt-20 md:pt-24 pb-8 border-b border-white/[0.06] px-6 md:px-10 lg:px-16">
				<div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:items-end md:justify-between gap-8 md:gap-0 text-center md:text-left">
					{/* Left — label + huge title */}
					<motion.div 
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="flex flex-col gap-2 items-center md:items-start"
					>
						<span className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-light">
							Selected works
						</span>
						<div className="flex flex-col">
							<span className="text-[12vw] sm:text-[9vw] md:text-[70px] leading-[0.85] uppercase font-light tracking-[-0.03em] text-white/90 block">
								Our{' '}
							</span>
							<span className="text-[12vw] sm:text-[9vw] md:text-[70px] leading-[0.85] uppercase font-bold tracking-[-0.05em] text-white block">
								Work
							</span>
						</div>
					</motion.div>

					{/* Right — descriptor */}
					<motion.p 
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
						className="max-w-[280px] text-sm md:text-base text-[#999999] font-light leading-relaxed md:text-right pb-1"
					>
						Crafting high-end digital experiences for ambitious brands across the globe.
					</motion.p>
				</div>
			</div>
			{/* ────────────────────────────────────────────────────────── */}

			<div className="w-full px-6 md:px-10 lg:px-16 mt-8 md:mt-16 pb-20">
				<div className="w-full max-w-[1440px] mx-auto overflow-visible">
					{projects.map((project, i) => {
						const targetScale = 1 - (projects.length - i) * 0.05
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
								technologies={project.technologies}
							/>
						)
					})}
				</div>
			</div>
		</main>
	)
}
export default Project
