'use client'
import Slider from './Slider'
import { useState } from 'react'

const Projects: React.FC = () => {
	const slideArray = [
		{
			index: 0,
			headline: 'Slide 1 Headline',
			button: 'Button 1',
			src: '/project.jpeg',
		},
		{
			index: 1,
			headline: 'Slide 2 Headline',
			button: 'Button 2',
			src: '/project.jpeg',
		},
		{
			index: 2,
			headline: 'Slide 3 Headline',
			button: 'Button 3',
			src: '/project.jpeg',
		},{
			index: 3,
			headline: 'Slide 3 Headline',
			button: 'Button 3',
			src: '/project.jpeg',
		},
	]
	const [currentSlide, setCurrentSlide] = useState<number>(0)

	const handlePreviousSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide - 1 + 3) % 3) // Assuming you have 3 slides
	}

	const handleNextSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide + 1) % 3) // Assuming you have 3 slides
	}
	return (
		<section className="flex w-full mx-auto h-screen bg-black items-center ">
			<div className="w-[1440px] mx-auto">
				<div className="mb-8">
					<h3 className="text-2xl font-semibold text-indigo-600 mb-7 border-b-2 w-fit border-indigo-600 pb-2">Welcome to Stellar</h3>
					<span className="text-white text-7xl font-medium block tracking-tighter m-0 p-0">The most hyper-curated</span>
					<span className="text-white text-7xl font-medium block tracking-tighter m-0 p-0">list of creatives on earth.</span>
				</div>
				<div data-aos="fade-up" className="flex gap-4">
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Branding
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Motion
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Product desing
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Copy writing
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Web Design
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Web Design
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Web Design
					</button>
				</div>
				
				<Slider heading="Your Heading" slides={slideArray} />
			</div>
		</section>
	)
}
export default Projects
