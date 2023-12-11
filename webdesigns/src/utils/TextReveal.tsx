'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import SplitText from './Split'
import useOnScreen from './UseOnSreen'

interface Props {
	text: string
	classname: string
}

const TextReveal: React.FC<Props> = ({ text, classname }) => {
	const ref = useRef(null)

	const [reveal, setReveal] = useState(false)
	const onScreen = useOnScreen(ref)

	useEffect(() => {
		if (onScreen) setReveal(onScreen)
	}, [onScreen])

	useEffect(() => {
		if (reveal) {
			const split = new SplitText('#headline', { type: 'lines' })

			gsap.to(split.lines, {
				duration: 1,
				y: -20,
				opacity: 1,
				stagger: 0.1,
				ease: 'power4.out',
			})
		}
	}, [reveal])

	return (
		<div className={`about-section ${reveal ? ' is-reveal' : ''}`} data-scroll-section>
			<p ref={ref} id="headline" className={` ${classname} ${reveal ? 'is-reveal' : ''}`}>
				{text}
			</p>
		</div>
	)
}

export default TextReveal
