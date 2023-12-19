import type { PricingCardProps } from '@/types/interface'
import { pricingData } from '@/utils/data'

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features }) => {
	return (
		<div className="relative flex flex-col p-8 bg-white rounded-lg duration-500 ease-in-out hover:-translate-y-3 shadow-md">
			<div>
				<h1 className="text-xl font-semibold text-black text-center">{title}</h1>
				<p className="flex justify-center mt-4">
					<span className="text-5xl font-bold tracking-tight text-center">${price}</span>
				</p>

				<ul role="list" className="pt-2 space-y-6 text-center">
					<span className="text-lg font-semibold text-gray-600 ">What s included?</span>
					{features.map((feature, index) => (
						<li key={index} className="flex xl:pl-10 items-center">
							<div className="flex justify-center items-center w-5 h-5 bg-[#0d0d0d] rounded-xl">
								<svg
									className="flex-shrink-0 w-4 h-4 mx-auto text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
							<span className="ml-3 text-neutral-600">{feature}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="mt-6 rounded-lg">
				<a
					href="#"
					className="w-full items-center block px-10 py-2.5 text-base font-medium text-center hover:bg-[#0d0d0d] hover:text-white text-black transition duration-500 ease-in-out transform border border-black  rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
				>
					Get Started
				</a>
			</div>
		</div>
	)
}

const PricingSection: React.FC = () => {
	return (
		<section className="py-20" id="pricing">
			<h1 className="text-6xl font-bold text-center pt-12 mb-4">Pricing</h1>
			<p className="text-xl text-gray-600 font-semibold text-center mb-3">Simple & Predictable pricing. No surprises.</p>
			<div className="relative items-center mx-auto xl:w-[1300px]">
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
