import type { PricingCardProps } from '@/types/interface'
import { pricingData } from '@/utils/data'

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features }) => {
	return (
		<div className="relative flex flex-col p-8 bg-white/5 text-white hover:bg-white rounded-lg duration-500 transition-all ease-in-out hover:-translate-y-3 shadow-md hover:text-black pricing">
			<div>
				<h1 className="text-xl font-light  text-center">{title}</h1>
				<p className="flex justify-center mt-4">
					<span className="text-5xl font-bold tracking-tight text-center">${price}</span>
				</p>

				<ul role="list" className="pt-2 space-y-6 text-center">
					<span className="text-lg text-[#777777]">What s included?</span>
					{features.map((feature, index) => (
						<li key={index} className="flex xl:pl-10 items-center">
							<div className="flex justify-center items-center w-5 h-5 bg-white rounded-xl">
								<svg
									className="flex-shrink-0 w-4 h-4 mx-auto text-black"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
							<span className="ml-3 text-[#777777] span font-semibold">{feature}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="mt-6 rounded-lg">
				<a href="#" className="w-full items-center block px-10 py-2.5 text-base font-medium text-center text-black  rounded-xl bg-white">
					Get Started
				</a>
			</div>
		</div>
	)
}

const PricingSection: React.FC = () => {
	return (
		<section className="bg-[#0c0c0c] mt-20" id="pricing">
			<div className="my-4 flex flex-col items-center mx-auto text-white text-3xl border-gray-500 pt-6">
				<span className="text-[85px] leading-none uppercase font-light">Trusted</span>
				<span className="text-[85px] leading-none uppercase font-bold">Collaborators</span>
				<p className="w-[350px] text-lg text-center mt-5 text-[#777777]">We develop gorgeous and memorable projects for our clients. </p>
			</div>
			{/* <p className="text-xl text-gray-600 font-semibold text-center mb-3">Simple & Predictable pricing. No surprises.</p> */}
			<div className="relative items-center mx-auto xl:w-[1440px]">
				<div>
					<div className="relative py-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-12 rounded-xl">
						{pricingData.map((card, index) => (
							<PricingCard key={index} {...card} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default PricingSection
