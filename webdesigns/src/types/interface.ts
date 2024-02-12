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
	technologies: string[]
}

export interface ModalProps {
	modal: { active: boolean; index: number }
	projects: Array<{ src: string; color: string }>
}
export interface CardsProps {
	index: number
	title: string
	name: string
	setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>
}
