'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/all'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { Marquee } from '../marquee/Marquee'

const Homepage: React.FC = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const myText = new SplitType('.header-text-1')

		const ctx = gsap.context(() => {
			gsap.to('.char', {
				y: 0,
				stagger: 0.05,
				delay: 0.5,
				duration: 0.1,
				opacity: 1,
			})

			gsap.to('.fade-in-el', {
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.2,
				delay: 0.8,
				ease: 'power2.out',
			})

			gsap.to('.marquee-fade', {
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 1.4,
				ease: 'power2.out',
			})
		})

		return () => {
			myText.revert()
			ctx.revert()
		}
	}, [])

	return (
		<section className="min-h-screen flex flex-col justify-between bg-[#0c0c0c] text-white contenedor relative overflow-hidden pt-24 pb-10">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[900px] h-[55vh] bg-white/[0.04] blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />
			<div className="absolute top-1/3 -left-20 w-[35vw] max-w-[380px] h-[40vh] bg-white/[0.025] blur-[90px] rounded-full rotate-12 pointer-events-none" />
			<div className="absolute top-1/3 -right-20 w-[35vw] max-w-[380px] h-[40vh] bg-white/[0.025] blur-[90px] rounded-full -rotate-12 pointer-events-none" />
			<div className="flex-1 flex flex-col justify-center items-center px-6 md:px-10">
				<div className="text-center w-full max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
					<div className="overflow-hidden pb-1 md:pb-3 w-full">
						<h1 className="uppercase text-[12vw] sm:text-[9vw] md:text-[80px] lg:text-[100px] font-light tracking-[-0.03em] text-center leading-[0.9] header-text-1 char select-none text-white/95">
							The destination
						</h1>
					</div>

					<div className="overflow-hidden pt-1 pb-4 md:pb-6 w-full">
						<h1 className="uppercase text-[12vw] sm:text-[9vw] md:text-[80px] lg:text-[100px] font-bold tracking-[-0.05em] text-center leading-[0.9] header-text-1 char select-none text-white">
							for your next one
						</h1>
					</div>

					<p className="fade-in-el opacity-0 translate-y-8 mt-4 md:mt-6 text-[#999999] text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
						We create stunning digital experiences that captivate your audience and drive results
					</p>

					<div className="fade-in-el opacity-0 translate-y-8 mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full sm:w-auto">
						<Link
							href="#projects"
							className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 sm:px-10 sm:py-4 rounded-full font-medium hover:bg-gray-200 hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto"
						>
							View Projects
							<FiArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
						</Link>
						<Link
							href="#footer"
							className="group flex items-center justify-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 sm:px-10 sm:py-4 rounded-full font-medium hover:border-white/40 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-white/90 hover:text-white"
						>
							Get in Touch
						</Link>
					</div>
				</div>
			</div>
			<div className="marquee-fade opacity-0 translate-y-4 w-full relative z-10 border-t border-white/[0.06] mt-10">
				<Marquee />
			</div>
		</section>
	)
}

export default Homepage
