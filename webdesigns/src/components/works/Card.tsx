'use client'
import Image from 'next/image'
import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import type { ProjectCardProps } from '@/types/interface'

const Card: React.FC<ProjectCardProps> = ({ i, description, src, url, title, progress, range, targetScale }) => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	})

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
	const scale = useTransform(progress, range, [1, targetScale])

	return (
		<div ref={container} className="h-screen w-full flex items-center justify-center sticky top-20">
			<motion.div
				style={{
					scale,
					top: `calc(-5vh + ${i * 0}px)`,
				}}
				className="flex flex-col relative h-[600px] w-[1280px] rounded-md origin-top bg-[#181818] text-white shadow-xl cursor-pointer"
			>
				<div className="h-full grid grid-cols-2 gap-12 w-full">
					<div className="relative h-[600px] w-full p-10 py-12 grid grid-rows-2">
						<div>
							<h3 className="text-6xl font-medium uppercase mb-6">{title}</h3>
							<div className="flex gap-3 items-center">
								<Link
									href={url}
									target="_blank"
									className="text-sm uppercase flex gap-3 items-center cursor-pointer px-6 py-1.5 bg-zinc-600/20 rounded-full"
								>
									Next
								</Link>
								<Link
									href={url}
									target="_blank"
									className="text-sm uppercase flex gap-3 items-center cursor-pointer px-6 py-1.5 bg-zinc-600/20 rounded-full"
								>
									Next
								</Link>
								<Link
									href={url}
									target="_blank"
									className="text-sm uppercase flex gap-3 items-center cursor-pointer px-6 py-1.5 bg-zinc-600/20 rounded-full"
								>
									Next
								</Link>
							</div>
							<p className="text-base pr-20 text-[#777777] font-medium mt-8">{description}</p>
						</div>

						<div className="flex justify-end flex-col">
							<span className="flex items-center gap-1">
								<Link
									href={url}
									target="_blank"
									className="text-base uppercase flex gap-3 items-center cursor-pointer py-2.5 px-6 rounded-full text-black bg-white"
								>
									See more
									<svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
											fill="black"
										/>
									</svg>
								</Link>
							</span>
						</div>
					</div>

					<div className="relative  h-[600px] rounded-r-md  overflow-hidden ">
						<motion.div className="w-full h-full" style={{ scale: imageScale }}>
							<Image src={src} alt="image" className="object-cover w-full h-full z-[-1] " width={1000} height={600} />
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Card
