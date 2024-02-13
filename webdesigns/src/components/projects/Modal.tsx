import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import type { ModalProps } from '@/types/interface'

const scaleAnimation = {
	initial: { scale: 0, x: '-50%', y: '-50%' },
	enter: { scale: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
	closed: { scale: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
}

export const Modal: React.FC<ModalProps> = ({ modal, projects }) => {
	const { active, index } = modal
	const modalContainer = useRef<HTMLDivElement>(null)
	const cursor = useRef<HTMLDivElement>(null)
	const cursorLabel = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const xMoveContainer = gsap.quickTo(modalContainer.current, 'left', { duration: 0.8, ease: 'power3' })
		const yMoveContainer = gsap.quickTo(modalContainer.current, 'top', { duration: 0.8, ease: 'power3' })
		const xMoveCursor = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' })
		const yMoveCursor = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' })
		const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', { duration: 0.45, ease: 'power3' })
		const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', { duration: 0.45, ease: 'power3' })

		const handleMouseMove = (e: MouseEvent): void => {
			const { pageX, pageY } = e
			xMoveContainer(pageX)
			yMoveContainer(pageY)
			xMoveCursor(pageX)
			yMoveCursor(pageY)
			xMoveCursorLabel(pageX)
			yMoveCursorLabel(pageY)
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<>
			<motion.div
				ref={modalContainer}
				variants={scaleAnimation}
				initial="initial"
				animate={active ? 'enter' : 'closed'}
				className="2xl:h-[250px] 2xl:w-[300px] xl:h-[200px] xl:w-[250px] w-[180px] h-[150px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
			>
				<div style={{ top: index * -100 + '%' }} className="h-full w-full absolute slider">
					{projects.map((project, index) => {
						const { src, color } = project
						return (
							<div className="w-full h-full flex justify-center items-center" style={{ backgroundColor: color }} key={`modal_${index}`}>
								<Image src={src} width={500} height={0} alt="image" className="w-[90%] h-full object-contain mx-auto" />
							</div>
						)
					})}
				</div>
			</motion.div>
			<motion.div
				ref={cursor}
				className="w-[80px] h-[80px] max-2xl:hidden rounded-full bg-[#0c0c0c] text-white absolute z-10 flex items-center justify-center text-sm font-light pointer-events-none"
				variants={scaleAnimation}
				initial="initial"
				animate={active ? 'enter' : 'closed'}
			></motion.div>
			<motion.div
				ref={cursorLabel}
				className="w-[80px] h-[80px] max-2xl:hidden rounded-full bg-[#0c0c0c] text-white absolute z-10 flex items-center justify-center text-sm font-light pointer-events-none bg-transparent"
				variants={scaleAnimation}
				initial="initial"
				animate={active ? 'enter' : 'closed'}
			>
				View
			</motion.div>
		</>
	)
}
