import { motion } from 'framer-motion'
import Body from './Body'
import { height } from './anim'
import { Footer } from './Footer'
import type { Dispatch, SetStateAction } from 'react'

interface IndexProps {
	isActive: { isActive: boolean; index?: number | undefined }
	setIsActive: Dispatch<SetStateAction<{ isActive: boolean; index?: number | undefined }>>
}

export const Index: React.FC<IndexProps> = ({ isActive, setIsActive }) => {
	return (
		<motion.div variants={height} initial="initial" animate="enter" exit="exit" className="overflow-hidden">
			<div className="flex gap-12 mb-20 lg:mb-0 lg:justify-between">
				<div className="flex flex-col justify-between">
					<Body selectedLink={isActive} setSelectedLink={setIsActive} />
					<Footer />
				</div>
			</div>
		</motion.div>
	)
}
