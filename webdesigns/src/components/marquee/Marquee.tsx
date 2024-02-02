'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion'
import { wrap } from '@motionone/utils'

interface ParallaxProps {
	children: string
	baseVelocity: number
}

const ParallaxText: React.FC<ParallaxProps> = ({ children, baseVelocity = 50 }) => {
	const baseX = useMotionValue(0)
	const { scrollY } = useScroll()
	const scrollVelocity = useVelocity(scrollY)
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	})
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	})
	const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)

	const directionFactor = useRef<number>(1)
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get()

		baseX.set(baseX.get() + moveBy)
	})

	return (
		<div className="parallax text-white py-4 pt-8 2xl:text-3xl  font-medium">
			<motion.div className="scroller 2xl:text-[90px] xl:text-[60px]" style={{ x }}>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
			</motion.div>
		</div>
	)
}

export const Marquee: React.FC = () => {
	return (
		<section className="xl:mb-[12rem] 2xl:mb-0">
			<ParallaxText baseVelocity={-1}>
				Nuestros proyectos / Nuestros proyectos / Nuestros proyectos / Nuestros proyectos / Nuestros proyectos / Nuestros proyectos / Nuestros
				proyectos / Nuestros proyectos /
			</ParallaxText>
		</section>
	)
}
