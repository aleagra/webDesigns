import { motion } from 'framer-motion'
import Link from 'next/link'
import { blur, translate } from './anim'
import { navigation } from '@/utils/data'
import type { Dispatch, SetStateAction } from 'react'

export interface BodyProps {
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
	const onClick = (): void => {
		setSelectedLink({ isActive: !selectedLink.isActive })
	}

	return (
		<div className="flex flex-wrap max-xl:flex-col mt-10 w-full lg:mt-16 select-none px-4 md:px-8">
			{navigation.map((link, index): JSX.Element => {
				return (
					<Link key={index} href={link.href} className="text-white uppercase no-drag">
						<motion.p
							className="m-0 flex mr-6 pt-2 font-light tracking-[-0.03em] text-5xl 2xl:text-[85px] lg:text-[55px] leading-[1.1] lg:pr-10 lg:border-r lg:border-white/20"
							onMouseOver={() => {
								setSelectedLink(prev => ({ ...prev, index }))
							}}
							onMouseLeave={() => {
								setSelectedLink(prev => ({ ...prev, index: undefined }))
							}}
							variants={blur}
							animate={selectedLink.index !== undefined && selectedLink.index !== index ? 'open' : 'closed'}
							onClick={onClick}
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
