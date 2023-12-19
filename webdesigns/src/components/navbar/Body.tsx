import { motion } from 'framer-motion'
import Link from 'next/link'
import { blur, translate } from './anim'
import { navigation } from '@/utils/data'
import type { Dispatch, SetStateAction } from 'react'

interface BodyProps {
	selectedLink: { isActive: boolean; index?: number | undefined }
	setSelectedLink: Dispatch<SetStateAction<{ isActive: boolean; index?: number | undefined }>>
}

const Body: React.FC<BodyProps> = ({ selectedLink, setSelectedLink }) => {
	const getChars = (word: string): JSX.Element[] => {
		const chars: JSX.Element[] = []
		word.split('').forEach((char, i) => {
			chars.push(
				<motion.span
					custom={[i * 0.02, (word.length - i) * 0.01]}
					variants={translate}
					initial="initial"
					animate="enter"
					exit="exit"
					key={char + i}
				>
					{char}
				</motion.span>,
			)
		})
		return chars
	}

	return (
		<div className="flex flex-wrap mt-10 w-full lg:mt-20">
			{navigation.map((link, index): JSX.Element => {
				return (
					<Link key={index} href={link.href} className="text-black uppercase">
						<motion.p
							className="m-0 flex mr-5 pt-3 font-normal text-3xl lg:text-8xl lg:pr-10 border-r-4 border-black"
							onMouseOver={() => {
								setSelectedLink(prev => ({ ...prev, index }))
							}}
							onMouseLeave={() => {
								setSelectedLink(prev => ({ ...prev, index: undefined }))
							}}
							variants={blur}
							animate={selectedLink.index !== undefined && selectedLink.index !== index ? 'open' : 'closed'}
							onClick={() => {
								setSelectedLink({ isActive: false, index })
							}}
						>
							{getChars(link.title)}
						</motion.p>
					</Link>
				)
			})}
		</div>
	)
}

export default Body
