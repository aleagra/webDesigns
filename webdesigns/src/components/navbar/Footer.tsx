import Link from 'next/link'
import { translate } from './anim'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
	return (
		<div className="flex xl:items-end 2xl: flex-wrap max-xl:flex-col text-sm uppercase mt-10 xl:mb-6 2xl:mb-0 lg:justify-between text-white font-light">
			<ul className="w-full 2xl:w-[25%] lg:w-auto mt-3 overflow-hidden select-none">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					<span className="text-[#777777] font-bold">Made by:</span> Alejandro Agra
				</motion.li>
			</ul>
			<ul className="w-full 2xl:w-[25%] 2xl:text-center lg:w-auto mt-3 overflow-hidden p-0">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					<span className="text-[#777777] font-bold">Portfolio: </span>
					<Link
						href="https://ale-agra.web.app/"
						target="_blank"
						className="opacity-70 hover:opacity-100 transition-opacity duration-300 ease-out"
					>
						Ale-agra
					</Link>
				</motion.li>
			</ul>
			<ul className="w-full 2xl:w-[25%] 2xl:text-center lg:w-auto mt-3 overflow-hidden p-0">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					<span className="text-[#777777] font-bold">Linkeind:</span>{' '}
					<Link
						href="https://www.linkedin.com/in/alejandro-agra/"
						target="_blank"
						className="opacity-70 hover:opacity-100 transition-opacity duration-300 ease-out"
					>
						Alejandro Agra
					</Link>
				</motion.li>
			</ul>
			<ul className="w-full 2xl:w-[25%] 2xl:text-end lg:text-center lg:w-auto mt-3 max-2xl:mt-10 overflow-hidden p-0">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					All rights reserved
				</motion.li>
			</ul>
		</div>
	)
}
