'use client'
import type { PricingCardProps } from '@/types/interface'
import { pricingData } from '@/utils/data'
import { FiCheck } from 'react-icons/fi'
import { motion } from 'framer-motion'

const PricingCard: React.FC<PricingCardProps & { isPopular?: boolean }> = ({ title, price, features, isPopular }) => {
	return (
		<div
			className={`relative flex flex-col h-full p-6 md:p-8 rounded-3xl md:rounded-[32px] duration-500 transition-all ease-in-out shadow-2xl hover:-translate-y-2 group backdrop-blur-md border ${
				isPopular === true ? 'bg-[#0c0c0c]/90 border-white/20 hover:border-white/40' : 'bg-[#0c0c0c]/80 border-white/5 hover:border-white/20'
			}`}
		>
			{isPopular === true && (
				<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xl z-20">
					Most Popular
				</div>
			)}

			<div className="flex flex-col h-full relative z-10 w-full">
				<h1 className="text-lg md:text-xl font-light text-center tracking-wide text-white/90">{title}</h1>
				<div className="flex justify-center mt-3 mb-5 md:mb-6">
					<span className="text-4xl text-white md:text-5xl font-bold tracking-tighter text-center">${price}</span>
				</div>

				<div className="w-full h-px bg-white/10 mb-5 md:mb-6" />

				<ul role="list" className="space-y-3.5 md:space-y-4 mb-8 md:mb-10">
					<span className="block text-[10px] md:text-xs text-gray-400 font-light mb-4 md:mb-5 text-center uppercase tracking-[0.2em]">
						What&apos;s included
					</span>
					{features.map((feature, index) => (
						<li key={index} className="flex items-start">
							<div
								className={`flex justify-center items-center min-w-[20px] w-5 h-5 rounded-full shrink-0 md:mt-[2px] ${
									isPopular === true ? 'bg-white text-black' : 'bg-white/10 text-white'
								}`}
							>
								<FiCheck className="w-3 h-3" />
							</div>
							<span className="ml-3.5 text-gray-300 text-sm font-light tracking-wide leading-relaxed">{feature}</span>
						</li>
					))}
				</ul>

				<div className="mt-auto">
					<button
						className={`w-full items-center block px-6 py-3 md:py-3.5 text-xs md:text-sm font-bold uppercase tracking-wide text-center rounded-full transition-all duration-300 hover:scale-[1.02] ${
							isPopular === true
								? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-gray-200'
								: 'bg-white/5 text-white border border-white/10 backdrop-blur-md hover:bg-white hover:text-black'
						}`}
					>
						Get Started
					</button>
				</div>
			</div>
		</div>
	)
}

const PricingSection: React.FC = () => {
	return (
		<section className="bg-[#0c0c0c] w-full select-none relative overflow-hidden" id="pricing">
			<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none" />

			{/* ── Section Header (Synchronized) ───────────────────────── */}
			<div className="pt-20 md:pt-24 pb-8 border-b border-white/[0.06] px-6 md:px-10 lg:px-16 relative z-10">
				<div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:items-end md:justify-between gap-8 md:gap-0 text-center md:text-left">
					{/* Left — label + huge title */}
					<motion.div 
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="flex flex-col gap-2 items-center md:items-start"
					>
						<span className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-light">Flexible Pricing</span>
						<div className="flex flex-col">
							<span className="text-[12vw] sm:text-[9vw] md:text-[70px] leading-[0.85] uppercase font-light tracking-[-0.03em] text-white/90 block">
								Our{' '}
							</span>
							<span className="text-[12vw] sm:text-[9vw] md:text-[70px] leading-[0.85] uppercase font-bold tracking-[-0.05em] text-white block">
								Pricing
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
						Experience the perfect blend of creativity and scalable digital architecture.
					</motion.p>
				</div>
			</div>
			{/* ────────────────────────────────────────────────────────── */}

			<div className="w-full px-6 md:px-10 lg:px-16">
				<div className="relative items-center mx-auto w-full max-w-[1440px] z-10 py-12 md:py-16 pb-20 md:pb-24">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
						{pricingData.map((card, index) => (
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
								key={index}
							>
								<PricingCard {...card} isPopular={index === 1} />
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default PricingSection
