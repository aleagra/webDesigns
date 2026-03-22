'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { background, opacity } from './anim'
import { Index } from './Index'

const Navbar: React.FC = () => {
	const [isActive, setIsActive] = useState<{ isActive: boolean; index?: number }>({ isActive: false, index: 0 })
	const navRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Element
			if (target.id === 'nav-background' || (navRef.current && !navRef.current.contains(target))) {
				if (isActive.isActive) {
					setIsActive({ isActive: false })
				}
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isActive.isActive])

	useEffect(() => {
		if (isActive.isActive) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
		}
		return () => {
			document.body.style.overflowY = 'auto'
		}
	}, [isActive.isActive])

	const onClick = (): void => {
		setIsActive({ isActive: !isActive.isActive })
	}

	const onClickHome = (): void => {
		if (isActive.isActive) {
			setIsActive({ isActive: false })
		}
	}

	return (
		<div ref={navRef} className="fixed w-full box-border px-8 py-5 lg:px-16 lg:py-6 z-[20] backdrop-blur-md bg-[#0c0c0c]/80 border-b border-white/[0.06]">
			<div className="flex justify-between items-center w-full max-w-[1440px] mx-auto uppercase text-sm lg:text-base font-bold tracking-[-0.03em] relative text-white">
				<Link href="/" className="overflow-hidden cursor-pointer no-drag" onClick={onClickHome}>
					<div className="relative w-full h-full select-none">
						<div className="el font-bold text-white w-full h-full bg-transparent">
							<div className="perspectiveText flex flex-col justify-center items-center h-full w-full select-none">
								<p className="m-0 p-0 select-none">Web Designs</p>
								<p className="m-0 p-0 select-none">Web Designs</p>
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
								<div className="el font-bold text-white w-full h-full bg-transparent">
									<div className=" flex flex-col justify-center items-center h-full w-full select-none">
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
									<div className=" flex flex-col justify-center items-center h-full w-full">
										<p className="m-0 p-0">Close</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
			<motion.div
				id="nav-background"
				variants={background}
				initial="initial"
				animate={isActive.isActive ? 'open' : 'closed'}
				className="bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-white/[0.06] h-full w-full z-[20] absolute left-0 top-[100%]"
			></motion.div>
			<AnimatePresence mode="wait"> {isActive.isActive && <Index isActive={isActive} setIsActive={setIsActive} />}</AnimatePresence>
		</div>
	)
}
export default Navbar
