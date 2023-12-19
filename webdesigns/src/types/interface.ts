import type { MotionValue } from 'framer-motion'

export interface PricingCardProps {
	title: string
	price: number
	features: string[]
}
export interface ProjectCardProps {
	title: string
	i: number
	description: string
	src: string
	progress: MotionValue<number>
	targetScale: number
	range: [number, number]
	url: string
}
