import type { PricingCardProps } from '@/types/interface'
import { pricingData } from '@/utils/data'

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features }) => {
	return (
		<div className="relative cursor-pointer flex flex-col p-8 max-md:mx-10 max-xl:rounded-lg max-md:p-5 bg-white/5 text-white hover:bg-white lg:rounded-lg duration-500 transition-all ease-in-out 2xl:hover:-translate-y-3 shadow-md hover:text-black pricing">
			<div>
				<h1 className="text-xl max-md:text-base font-light  text-center">{title}</h1>
				<p className="flex justify-center mt-4">
					<span className="text-5xl max-md:text-3xl font-bold tracking-tight text-center">${price}</span>
				</p>

				<ul role="list" className="pt-2 space-y-6 text-center xl:py-6">
					<span className="text-lg max-md:text-base text-[#777777]">What s included?</span>
					{features.map((feature, index) => (
						<li key={index} className="flex xl:pl-10 items-center max-md:px-10">
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
							<span className="ml-3 text-[#777777] max-md:text-sm span font-semibold">{feature}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="mt-6 rounded-lg">
				<a
					href="#"
					className="w-full items-center block px-10 py-2.5 max-md:py-1.5 max-md:w-fit max-md:my-3 max-md:mx-auto text-base font-medium text-center text-black  rounded-xl bg-white"
				>
					Get Started
				</a>
			</div>
		</div>
	)
}

const PricingSection: React.FC = () => {
	return (
		<section className="bg-[#0c0c0c] 2xl:h-[85vh] max-2xl:min-h-screen xl:mt-32 2xl:mt-20 scroll-mt-28" id="pricing">
			<div className="my-4 flex flex-col items-center mx-auto text-white text-3xl border-gray-500 2xl:pt-6">
				<span className="2xl:text-[85px] xl:text-[60px] md:text-[50px] max-md:text-[35px] leading-none uppercase font-light">Trusted</span>
				<span className="2xl:text-[85px] xl:text-[60px] md:text-[50px] max-md:text-[35px] leading-none uppercase font-bold">
					Collaborators
				</span>
				<p className="w-[350px] text-lg max-md:px-3 text-center mt-5 text-[#777777]">
					We develop gorgeous and memorable projects for our clients.{' '}
				</p>
			</div>
			{/* <p className="text-xl text-gray-600 font-semibold text-center mb-3">Simple & Predictable pricing. No surprises.</p> */}
			<div className="relative items-center mx-auto 2xl:w-[1440px] md:px-12">
				<div>
					<div className="relative py-10 max-md:space-y-12 md:gap-6 overflow-hidden lg:space-y-0 md:grid md:grid-cols-2  lg:grid-cols-3 lg:gap-x-12">
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
