'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { background, opacity } from './anim'
import { Index } from './Index'

const Pruebanav: React.FC = () => {
	const [isActive, setIsActive] = useState<{ isActive: boolean; index?: number }>({ isActive: false, index: 0 })

	return (
		<div className="bg-[#f4f0ea] fixed w-full box-border p-3 lg:p-6 z-[20]">
			<div className="flex justify-between uppercase text-xs lg:text-base font-medium relative text-black">
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
				className="bg-[#172a21] h-full w-full z-[20] absolute left-0 top-[100%]"
			></motion.div>
			<AnimatePresence mode="wait"> {isActive.isActive && <Index isActive={isActive} setIsActive={setIsActive} />}</AnimatePresence>
		</div>
	)
}
export default Pruebanav
