'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { background, opacity } from './anim'
import { Index } from './Index'

const Navbar: React.FC = () => {
	const [isActive, setIsActive] = useState<{ isActive: boolean; index?: number }>({ isActive: false, index: 0 })

	return (
		<div className="fixed w-full box-border p-8 lg:px-16 lg:pt-10 lg:pb-5 2xl:pb-5 z-[20] bg-[#0c0c0c]">
			<div className="flex justify-between uppercase text-xs lg:text-base font-medium relative text-white">
				<Link href="/">Web Desings</Link>
				<div
					onClick={() => {
						setIsActive({ isActive: !isActive.isActive })
					}}
					className="flex items-center justify-center gap-2 cursor-pointer"
				>
					<div className="relative flex items-center">
						<motion.p variants={opacity} className="absolute right-0 opacity-0" animate={!isActive.isActive ? 'open' : 'closed'}>
							Menu
						</motion.p>
						<motion.p variants={opacity} className="absolute right-0 opacity-0" animate={isActive.isActive ? 'open' : 'closed'}>
							Close
						</motion.p>
					</div>
				</div>
			</div>
			<motion.div
				variants={background}
				initial="initial"
				animate={isActive.isActive ? 'open' : 'closed'}
				className="bg-white h-full w-full z-[20] absolute left-0 top-[100%]"
			></motion.div>
			<AnimatePresence mode="wait"> {isActive.isActive && <Index isActive={isActive} setIsActive={setIsActive} />}</AnimatePresence>
		</div>
	)
}
export default Navbar
