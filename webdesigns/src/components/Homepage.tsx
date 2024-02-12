'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/all'

const Homepage: React.FC = () => {
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
		tl.fromTo('.description', { opacity: 0 }, { opacity: 1 }, '<')
		tl.fromTo('.buttonn', { opacity: 0 }, { delay: 1, opacity: 1, duration: 0.7 }, '<')
	}, [])

	return (
		<section className="h-screen flex flex-col justify-center items-center max-md:px-12 bg-[#0c0c0c] text-white contenedor">
			<div>
				<h1 className="uppercase 2xl:text-[145px] text-[50px] max-md:my-2 font-light text-center leading-none max-md:leading-tight header-text-1 char">
					The destination
				</h1>
			</div>

			<div>
				<h1 className="uppercase 2xl:text-[145px] text-[50px] max-md:my-2 text-center leading-none max-md:leading-tight header-text-1 font-bold">
					for your next one
				</h1>
			</div>
		</section>
	)
}

export default Homepage
