'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { background, opacity } from './anim'
import { Index } from './Index'

const Navbar: React.FC = () => {
	const [isActive, setIsActive] = useState<{ isActive: boolean; index?: number }>({ isActive: false, index: 0 })

	const onClick = (): void => {
		setIsActive({ isActive: !isActive.isActive })

		if (!isActive.isActive) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
	}

	return (
		<div className="fixed w-full box-border p-8 lg:px-16 lg:pt-10 lg:pb-5 2xl:pb-5 z-[20] bg-[#0c0c0c]">
			<div className="flex justify-between uppercase text-xs lg:text-base font-medium relative text-white">
				<Link href="/" className="overflow-hidden cursor-pointer no-drag" onClick={onClick}>
					<div className="relative w-full h-full select-none">
						<div className="el text-white w-full h-full bg-[#0c0c0c]">
							<div className="perspectiveText flex flex-col justify-center items-center h-full w-full select-none">
								<p className="m-0 p-0 select-none">Web Desings</p>
								<p className="m-0 p-0 select-none">Web Desings</p>
							</div>
						</div>
					</div>
				</Link>
				<div onClick={onClick} className="flex items-center justify-center gap-2 cursor-pointer">
					<div className="relative flex items-center">
						<motion.div
							variants={opacity}
							className={`absolute overflow-hidden right-0 opacity-0 select-none ${!isActive.isActive ? 'z-10' : ''}`}
							animate={!isActive.isActive ? 'open' : 'closed'}
						>
							<div className="relative w-full h-full select-none">
								<div className="el text-white w-full h-full bg-[#0c0c0c]">
									<div className="perspectiveText flex flex-col justify-center items-center h-full w-full select-none">
										<p className="m-0 p-0 select-none">Menu</p>
										<p className="m-0 p-0 select-none">Menu</p>
									</div>
								</div>
							</div>
						</motion.div>
						<motion.div
							variants={opacity}
							className={`absolute overflow-hidden right-0 opacity-0 ${isActive.isActive ? 'z-10' : ''}`}
							animate={isActive.isActive ? 'open' : 'closed'}
						>
							<div className="relative w-full h-full">
								<div className="el text-white w-full h-full bg-[#0c0c0c]">
									<div className="perspectiveText flex flex-col justify-center items-center h-full w-full">
										<p className="m-0 p-0">Close</p>
										<p className="m-0 p-0">Close</p>
									</div>
								</div>
							</div>
						</motion.div>
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
