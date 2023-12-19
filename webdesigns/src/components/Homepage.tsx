'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/all'

const Homepage: React.FC = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

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

		// tl.to('.contenedor', { width: '98vh' })
		// tl.fromTo('.logo', { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '<')
		// tl.fromTo('.menu', { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '<')
		tl.fromTo('.description', { opacity: 0 }, { opacity: 1 }, '<')
		tl.fromTo('.buttonn', { opacity: 0 }, { delay: 1, opacity: 1, duration: 0.7 }, '<')
	}, [])

	return (
		<section className="h-screen flex flex-col justify-center items-center bg-[#162a21] text-[#f4f0ea] contenedor">
			<div>
				<h1 className="uppercase header-text-1 char">The destination</h1>
			</div>

			<div>
				<h1 className="uppercase header-text-1">for your next one</h1>
			</div>

			<span className="text-xl mt-5 mb-10 text-white description">HAFH IS A DISCOVERY PLATFORM FOR THE MODERN TRAVELLER</span>
			<button className="buttonn px-12 py-3 text-base font-medium text-center transition duration-300 ease-in-out transform  border-2 hover:bg-white hover:text-black border-white rounded-full text-white bg-transparent">
				Branding
			</button>
		</section>
	)
}

export default Homepage
