'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/all'

const UseClient: React.FC = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const myText = new SplitType('.header-text-1')

		gsap.to('.char', {
			y: 0,
			stagger: 0.05,
			delay: 0.5,
			duration: 0.1,
			opacity: 1,
		})

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const tl = gsap.timeline({
			defaults: {
				ease: 'power3.inOut',
				duration: 2,
				opacity: 0,
				stagger: 0.5,
				// scrollTrigger: {
				// 	pin: true,
				// 	trigger: '.contenedor',
				// 	markers: true,
				// 	start: 'top top',
				// 	end: '+=450',
				// 	scrub: 4,
				// },
			},
		})

		// tl.fromto('.description', { opacity: 0 }, { opacity: 1 }, '<')
		// tl.fromto('.buttonn', { opacity: 0 }, { delay: 1, opacity: 1, duration: 0.7 }, '<')
	}, [])

	return null
}

export default UseClient
