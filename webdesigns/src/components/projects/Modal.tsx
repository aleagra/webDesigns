import { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import type { ModalProps } from '@/types/interface'
import { FiArrowUpRight } from 'react-icons/fi'

const scaleAnimation = {
	initial: { scale: 0, x: '-50%', y: '-50%', opacity: 0 },
	enter: { scale: 1, x: '-50%', y: '-50%', opacity: 1, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } },
	closed: { scale: 0.5, x: '-50%', y: '-50%', opacity: 0, transition: { duration: 0.35, ease: [0.32, 0, 0.67, 0] } },
}

export const Modal: React.FC<ModalProps> = ({ modal, projects }) => {
	const { active, index } = modal
	const modalContainer = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// Only enable GSAP mouse tracker if not on mobile
		if (window.innerWidth < 1024) return

		const moveContainerX = gsap.quickTo(modalContainer.current, 'left', { duration: 0.45, ease: 'power3.out' })
		const moveContainerY = gsap.quickTo(modalContainer.current, 'top', { duration: 0.45, ease: 'power3.out' })

		const handleMouseMove = (e: MouseEvent): void => {
			const { clientX, clientY } = e
			moveContainerX(clientX)
			moveContainerY(clientY)
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	const currentProject = projects[index] || projects[0]

	return (
		<div className="pointer-events-none z-[9999] hidden lg:block">
			<div 
				ref={modalContainer}
				className="fixed left-[-1000px] top-[-1000px] pointer-events-none z-[9999]"
			>
				{/* ── Bloom Glow Effect ── */}
				<motion.div 
					animate={active ? { opacity: 0.15, scale: 1.1 } : { opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.6 }}
					className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/[0.05] blur-[90px] rounded-full z-[-1]"
				/>

				{/* ── Premium Cinematic Modal Box ── */}
				<motion.div
					variants={scaleAnimation}
					initial="initial"
					animate={active ? 'enter' : 'closed'}
					className="absolute left-1/2 top-1/2 w-[380px] h-[260px] bg-[#111111] overflow-hidden rounded-[24px] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] flex flex-col z-50 will-change-transform"
				>
					{/* Premium top border accent like Works/Card.tsx */}
					<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-40" />

					{/* PROJECT IMAGE (Full Bleed) */}
					<div className="w-full h-full absolute inset-0 z-0">
						<div 
							style={{ top: index * -100 + '%' }} 
							className="h-full w-full absolute slider transition-[top] duration-600 ease-[cubic-bezier(0.76,0,0.24,1)]"
						>
							{projects.map((project, i) => {
								const { src, color } = project
								return (
									<div 
										key={`m_img_${i}`}
										className="w-full h-full flex justify-center items-center relative overflow-hidden" 
										style={{ backgroundColor: color }}
									>
										{/* Overlay to subtly blend text over images */}
										<div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
										<Image 
											src={src} 
											fill
											alt="preview" 
											className="object-cover scale-[1.02]" 
											sizes="380px"
											priority
										/>
									</div>
								)
							})}
						</div>
					</div>

					{/* ── MODAL OVERLAY FOOTER ── */}
					<div className="absolute bottom-0 inset-x-0 h-[80px] w-full bg-gradient-to-t from-[#111111]/95 via-[#111111]/80 to-transparent flex items-end justify-between px-6 pb-5 pt-8 z-20 pointer-events-none">
						<div className="flex flex-col gap-1">
							<span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.2em] font-light">
								0{index + 1} — Website
							</span>
							<h4 className="text-[14px] font-black uppercase tracking-[-0.02em] text-white">
								{currentProject?.title}
							</h4>
						</div>

						{/* Small distinct button matching the new design curve */}
						<div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
							<FiArrowUpRight size={14} className="text-white" />
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
