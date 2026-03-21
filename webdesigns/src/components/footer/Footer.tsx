'use client'
import Link from 'next/link'
import { BiLogoGithub } from 'react-icons/bi'
import { FaLinkedinIn, FaArrowUp } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { motion } from 'framer-motion'
const SocialIcons: React.FC = () => {
	return (
		<div className="text-xl font-semibold flex gap-4">
			<Link
				href="https://www.linkedin.com/in/alejandro-agra/"
				target="_blank"
				aria-label="LinkedIn profile"
				className="hover:scale-125 opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer no-drag"
			>
				<FaLinkedinIn />
			</Link>
			<Link
				href="https://github.com/aleagra"
				target="_blank"
				aria-label="GitHub profile"
				className="hover:scale-125 opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer no-drag"
			>
				<BiLogoGithub />
			</Link>
			<Link
				href="https://ale-agra.vercel.app/es"
				target="_blank"
				aria-label="Personal portfolio"
				className="hover:scale-125 opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer no-drag"
			>
				<TbWorld />
			</Link>
		</div>
	)
}

const Footer: React.FC = () => {
	return (
		<footer className="w-full pt-20 pb-10 lg:pt-32 lg:pb-12 text-white relative bg-[#0c0c0c] border-t border-white/[0.06]" id="footer">
			<motion.div 
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="flex flex-col text-center items-center max-w-[1440px] px-6 md:px-10 mx-auto"
			>
				<span className="text-[12vw] sm:text-[9vw] md:text-[80px] lg:text-[100px] uppercase leading-[0.9] tracking-[-0.03em] font-light select-none text-white/95">
					Let&apos;s create
				</span>
				<span className="text-[12vw] sm:text-[9vw] md:text-[80px] lg:text-[100px] uppercase font-bold leading-[0.9] tracking-[-0.05em] select-none text-white">
					something great
				</span>
				<p className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#999999] mt-6 select-none font-light tracking-wide">
					Contact us and let&apos;s bring your vision to life
				</p>

				<div className="w-full flex justify-between flex-col md:flex-row gap-5 items-center mt-16 lg:mt-24 border-t border-white/[0.06] pt-8">
					<button
						onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
						className="overflow-hidden cursor-pointer no-drag"
					>
						<div className="relative w-full h-full flex gap-2 items-center opacity-70 transition-opacity duration-300 hover:opacity-100">
							<FaArrowUp />
							<div className="el text-white w-full h-full bg-[#0c0c0c]">
								<div className="perspectiveText flex flex-col justify-center items-center h-full w-full select-none">
									<p className="m-0 p-0">Back top</p>
									<p className="m-0 p-0">Back top</p>
								</div>
							</div>
						</div>
					</button>

					<p className="text-sm md:text-base opacity-50 select-none">2024 © All rights reserved</p>
					<SocialIcons />
				</div>
			</motion.div>
		</footer>
	)
}

export default Footer
