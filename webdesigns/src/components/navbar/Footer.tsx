import Link from 'next/link'
import { translate } from './anim'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
	return (
		<div className="flex xl:items-end flex-wrap max-xl:flex-col text-xs uppercase mt-10 mb-6 lg:justify-between text-white font-light select-none tracking-[0.15em] border-t border-white/[0.06] pt-8 px-4 md:px-8">
			<ul className="w-full 2xl:w-[25%] lg:w-auto mt-3 overflow-hidden">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					<span className="text-white/30">Made by </span>Alejandro Agra
				</motion.li>
			</ul>
			<ul className="w-full 2xl:w-[25%] 2xl:text-center lg:w-auto mt-3 overflow-hidden p-0">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					<span className="text-white/30">Portfolio </span>
					<Link
						href="https://ale-agra.vercel.app/es"
						target="_blank"
						className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-out"
					>
						ale-agra.vercel.app
					</Link>
				</motion.li>
			</ul>
			<ul className="w-full 2xl:w-[25%] 2xl:text-center lg:w-auto mt-3 overflow-hidden p-0">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					<span className="text-white/30">Linkedin </span>
					<Link
						href="https://www.linkedin.com/in/alejandro-agra/"
						target="_blank"
						className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-out"
					>
						Alejandro Agra
					</Link>
				</motion.li>
			</ul>
			<ul className="w-full 2xl:w-[25%] 2xl:text-end lg:text-center lg:w-auto mt-3 overflow-hidden p-0">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit" className="opacity-40">
					© 2024 All rights reserved
				</motion.li>
			</ul>
		</div>
	)
}
