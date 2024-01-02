// import { RiMailFill } from 'react-icons/ri'
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

// const NewsletterForm: React.FC = () => {
// 	return (
// 		<div className="xl:mt-8 mt-5 flex gap-x-4 max-xl:flex-col max-xl:gap-y-5">
// 			<label htmlFor="email-address" className="sr-only">
// 				Email address
// 			</label>
// 			<div className="relative flex items-center">
// 				<input
// 					id="email-address"
// 					name="email"
// 					type="email"
// 					autoComplete="off"
// 					required
// 					className="min-w-0 flex-auto rounded-lg border-2 border-white bg-transparent px-12 pr-16 py-2.5 shadow-sm sm:text-sm sm:leading-0 placeholder:text-white outline-none transition-colors duration-500 "
// 					placeholder="Your mail address"
// 				/>
// 				<RiMailFill className="absolute left-5 text-base text-white" />
// 			</div>
// 			<button
// 				type="submit"
// 				className="flex-none rounded-full bg-white px-5 py-2 text-sm max-xl:w-fit max-xl:mx-auto text-black shadow-sm border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
// 			>
// 				Get Access
// 			</button>
// 		</div>
// 	)
// }

const SocialIcons: React.FC = () => {
	return (
		<div className="text-xl font-semibold flex gap-4">
			<FaLinkedin className="hover:text-black transition-colors duration-500 cursor-pointer" />
			<FaInstagram className="hover:text-black transition-colors duration-500 cursor-pointer" />
			<FaWhatsapp className="hover:text-black transition-colors duration-500 cursor-pointer" />
		</div>
	)
}

const Footer: React.FC = () => {
	return (
		<footer className="w-full 2xl:h-[80vh]  text-white" id="footer">
			<div className="flex flex-col h-full text-center pt-10 justify-end items-center">
				<span className="xl:text-[130px] text-[65px] uppercase leading-none font-light">Discover</span>
				<span className="xl:text-[130px] text-[65px] uppercase font-bold leading-none">Our Wailist</span>
				<p className="2xl:text-2xl text-sm text-gray-300 mt-3 mb-2">By signing up, you agree to receive awesome</p>
				{/* <NewsletterForm /> */}
				<div className="w-full flex justify-between max-2xl:flex-col gap-5 items-center xl:mt-[150px] mt-[75px] 2xl:px-24 mb-14">
					<p className="2xl:text-lg text-sm hover:text-black transition-colors duration-500 cursor-pointer max-2xl:hidden">Volver arriba</p>
					<p className="2xl:text-lg text-sm hover:text-black transition-colors duration-500 cursor-pointer">
						2023 © Todos los derechos reservados
					</p>
					<SocialIcons />
				</div>
			</div>
		</footer>
	)
}

export default Footer
