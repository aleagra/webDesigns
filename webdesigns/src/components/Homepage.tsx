'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { SplitText } from '../utils/Split'

const Homepage: React.FC = () => {
	useEffect(() => {
		const split = new SplitText('#header-text', {
			type: 'lines',
			linesClass: 'lineChildren',
		})

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const splitParent = new SplitText('#header-text', {
			type: 'lines',
			linesClass: 'lineParent',
		})

		gsap.to(split.lines, {
			duration: 1,
			y: 0,
			opacity: 1,
			stagger: 0.1,
			ease: 'power2',
		})
	}, [])

	return (
		<section className="header-container h-screen flex flex-col justify-center items-center bg-black text-white" data-scroll-section>
			<div className="container">
				<h1 id="header-text glitch">The destination </h1>
			</div>

			<div>
				<h1 id="header-text glitch">for your next one</h1>
			</div>

			<span className="text-xl mt-5 mb-10 font-light">HAFH IS A DISCOVERY PLATFORM FOR THE MODERN TRAVELLER</span>
			<button className="px-12 py-3 text-base font-medium text-center  transition duration-500 ease-in-out transform  border border-gray-600 rounded-full text-[#1d1d1d] bg-white">
				Branding
			</button>
		</section>
	)
}
export default Homepage
