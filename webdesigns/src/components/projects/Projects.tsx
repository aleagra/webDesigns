'use client'
import { projectData } from '@/utils/data'
import { Cards } from './Cards'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from './Modal'

export const Projects: React.FC = () => {
	const [modal, setModal] = useState({ active: false, index: 0 })

	return (
		<section className="bg-[#0c0c0c] scroll-mt-24 w-full" id="projects">
			<div className="pb-8 border-b border-white/[0.06] px-6 md:px-10 lg:px-16">
				<div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:items-end md:justify-between gap-8 md:gap-0 text-center md:text-left">
					<motion.div 
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="flex flex-col gap-2 items-center md:items-start"
					>
						<span className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-light">
							Latest Projects
						</span>
						<div className="flex flex-col">
							<span className="text-[12vw] sm:text-[9vw] md:text-[70px] leading-[0.85] uppercase font-light tracking-[-0.03em] text-white/90 block">
								Web{' '}
							</span>
							<span className="text-[12vw] sm:text-[9vw] md:text-[70px] leading-[0.85] uppercase font-bold tracking-[-0.05em] text-white block">
								Platforms
							</span>
						</div>
					</motion.div>
					<motion.p 
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
						className="max-w-[320px] text-sm md:text-base text-[#999999] font-light leading-relaxed md:text-right pb-1"
					>
						Discover a curated portfolio of digital platforms built for scale and premium aesthetics.
					</motion.p>
				</div>
			</div>
			<div className="w-full px-6 md:px-10 lg:px-16">
				<div className="w-full max-w-[1440px] mx-auto overflow-hidden">
					{projectData.map((project, index) => {
						return <Cards index={index} title={project.title} name={project.name} setModal={setModal} key={index} href={project.href} />
					})}
				</div>
			</div>
			<Modal modal={modal} projects={projectData} />
		</section>
	)
}
