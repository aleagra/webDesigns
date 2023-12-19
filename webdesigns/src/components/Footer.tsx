import { RiMailFill } from 'react-icons/ri'
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const NewsletterForm: React.FC = () => {
	return (
		<div className="xl:mt-8 mt-5 flex max-w-md gap-x-4 max-xl:flex-col max-xl:gap-y-5">
			<label htmlFor="email-address" className="sr-only">
				Email address
			</label>
			<div className="relative flex items-center">
				<input
					id="email-address"
					name="email"
					type="email"
					autoComplete="off"
					required
					className="min-w-0 flex-auto rounded-lg border-2 border-white bg-transparent px-12 pr-16 py-2.5 shadow-sm sm:text-sm sm:leading-0 placeholder:text-white outline-none transition-colors duration-500 "
					placeholder="Your mail address"
				/>
				<RiMailFill className="absolute left-5 text-base text-white" />
			</div>
			<button
				type="submit"
				className="flex-none rounded-full bg-white px-5 py-2 text-sm max-xl:w-fit max-xl:mx-auto text-black shadow-sm border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
			>
				Get Access
			</button>
		</div>
	)
}

const SocialIcons: React.FC = () => {
	return (
		<div className="text-2xl font-semibold flex gap-4">
			<FaLinkedin className="hover:text-black transition-colors duration-500 cursor-pointer" />
			<FaInstagram className="hover:text-black transition-colors duration-500 cursor-pointer" />
			<FaWhatsapp className="hover:text-black transition-colors duration-500 cursor-pointer" />
		</div>
	)
}

const Footer: React.FC = () => {
	return (
		<footer className="w-full bg-[#0d0d0d] text-white py-14" id="footer">
			<div className="flex flex-col h-full text-center justify-center items-center">
				<h1 className="text-7xl font-semibold mb-6 ">Join Our Wailist</h1>
				<p className="text-base text-gray-300 font-semibold">By signing up, you agree to receive awesome emails and updates.</p>
				<NewsletterForm />
				<div className="w-full flex justify-evenly items-center text-gra mt-20">
					<p className="text-base font-semibold  hover:text-black transition-colors duration-500 cursor-pointer">Alejandro Agra</p>
					<SocialIcons />
					<p className="text-base font-semibold hover:text-black transition-colors duration-500 cursor-pointer">Juan Pablo Moscoloni</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
