'use client'
import Image from 'next/image'
import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import type { ProjectCardProps } from '@/types/interface'

const Card: React.FC<ProjectCardProps> = ({ i, description, src, url, title, progress, range, targetScale, technologies }) => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	})

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
	const scale = useTransform(progress, range, [1, targetScale])

	return (
		<div
			ref={container}
			className="h-[93vh] max-md:h-[75vh] max-md:px-6 max-lg:px-12 w-full flex items-center justify-center sticky top-20 select-none"
		>
			<motion.div
				style={{
					scale,
					top: `calc(-5vh + ${i * 0}px)`,
				}}
				className="flex flex-col relative 2xl:w-[1280px] 2xl:h-[600px] lg:w-[1000px] lg:h-[450px] rounded-md origin-top bg-[#181818] text-white shadow-xl"
			>
				<div className="h-full grid grid-cols-2 max-md:grid-cols-1 gap-12 w-full">
					<div className="relative 2xl:h-[600px] max-md:h-[500px] lg:h-[450px] w-full p-10 max-md:px-6 py-12 grid grid-rows-2">
						<div>
							<h3 className="2xl:text-6xl xl:text-3xl max-md:text-2xl max-md:text-center font-medium uppercase mb-6">{title}</h3>
							<div className="flex gap-3 items-center max-md:justify-center">
								{technologies.map((tech, index) => (
									<span
										key={index}
										className="text-sm uppercase flex gap-3 items-center cursor-pointer px-6 py-1.5 bg-zinc-600/20 rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
							<p className="2xl:text-base xl:text-sm max-md:text-center 2xl:pr-20 xl:pr-6 text-[#777777] font-medium mt-8 max-md:mt-12">
								{description}
							</p>
						</div>

						<div className="flex justify-end flex-col">
							<span className="flex items-center gap-1">
								<Link
									href={url}
									target="_blank"
									className="text-base max-md:mx-auto uppercase flex gap-3 items-center cursor-pointer py-2.5 px-6 rounded-full text-black bg-white no-drag"
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

					<div className="relative  2xl:h-[600px] xl:h-[450px] rounded-r-md  overflow-hidden max-md:hidden">
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
