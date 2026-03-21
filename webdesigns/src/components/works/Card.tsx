'use client'
import Image from 'next/image'
import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import type { ProjectCardProps } from '@/types/interface'
import { FiArrowUpRight } from 'react-icons/fi'

const Card: React.FC<ProjectCardProps> = ({ 
	i, 
	description, 
	src, 
	url, 
	title, 
	progress, 
	range, 
	targetScale, 
	technologies 
}) => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	})

	const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
	const scale = useTransform(progress, range, [1, targetScale])

	return (
		<div
			ref={container}
			className="h-[93vh] max-md:h-[75vh] w-full flex items-center justify-center sticky top-20 select-none"
		>
			<motion.div
				style={{
					scale,
					top: `calc(-5vh + ${i * 0}px)`,
				}}
				className="flex flex-col relative w-full h-[550px] lg:h-[450px] 2xl:h-[600px] rounded-[32px] md:rounded-[40px] origin-top bg-[#111111] text-white shadow-xl md:shadow-2xl overflow-hidden"
			>
				<div className="absolute inset-x-0 top-0 h-px bg-white/10 z-30" />

				<div className="h-full grid grid-cols-1 md:grid-cols-2 w-full relative">
					<div className="relative w-full p-8 md:p-10 2xl:p-16 flex flex-col justify-between z-20 h-full">
						<div>
							<span className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-white/20 uppercase block mb-3 md:mb-4">
								Project 0{i + 1}
							</span>
							
							<h3 className="text-[32px] sm:text-[36px] md:text-[36px] lg:text-[40px] xl:text-[46px] leading-[1] tracking-[-0.03em] uppercase mb-4 2xl:mb-6">
								<span className="block font-light text-white/70">
									{title.split(' ')[0]}
								</span>
								<span className="block font-black text-white">
									{title.split(' ').slice(1).join(' ')}
								</span>
							</h3>
							
							<div className="flex flex-wrap gap-2">
								{technologies.map((tech, index) => (
									<span
										key={index}
										className="inline-flex items-center rounded-full border border-white/[0.08] px-3 md:px-4 py-1.5 font-mono text-[8px] md:text-[9px] tracking-widest text-white/40 uppercase bg-[#111111]/50 backdrop-blur-sm"
									>
										{tech}
									</span>
								))}
							</div>
							
							<p className="mt-5 lg:mt-6 2xl:mt-8 text-[13px] sm:text-[14px] md:text-[14px] xl:text-[16px] leading-relaxed text-white/40 font-light pr-0 xl:pr-8 line-clamp-4 2xl:line-clamp-none">
								{description}
							</p>
						</div>
						<div className="mt-auto pt-4 lg:pt-5 2xl:pt-6 border-t border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 shrink-0">
							<div className="flex items-center gap-3">
								<span className="font-mono text-[9px] md:text-[10px] tracking-widest text-white/20 uppercase">
									Case Study
								</span>
								<span className="h-3 w-px bg-white/10" />
								<span className="font-mono text-[9px] md:text-[10px] tracking-widest text-white/20">
									2024
								</span>
							</div>

							<Link
								href={url}
								target="_blank"
								className="group/btn inline-flex w-full lg:w-max items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 2xl:px-7 py-3 text-[10px] font-bold tracking-widest text-white/80 uppercase transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
							>
								View Project
								<FiArrowUpRight
									size={12}
									className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
								/>
							</Link>
						</div>
					</div>
					<div className="absolute inset-0 md:relative w-full h-full overflow-hidden z-0 bg-[#111111]">
						<div className="hidden absolute inset-y-0 left-[-1px] w-32 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent pointer-events-none z-10" />
						<div className="md:hidden absolute inset-0 bg-gradient-to-b from-[#111111]/95 via-[#111111]/90 to-[#111111]/70 pointer-events-none z-10" />
						<motion.div className="absolute inset-[-1px] max-md:opacity-60" style={{ scale: imageScale }}>
							<Image 
								src={src} 
								alt={title} 
								className="object-cover object-center md:object-left-top w-full h-full" 
								fill 
								sizes="(max-width: 768px) 100vw, 50vw" 
								priority={i === 0}
							/>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Card
