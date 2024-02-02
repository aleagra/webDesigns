import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const SocialIcons: React.FC = () => {
	return (
		<div className="text-xl font-semibold flex gap-4">
			<FaLinkedin className="hover:scale-125 transition-all duration-500 cursor-pointer" />
			<FaInstagram className="hover:scale-125 transition-all duration-500 cursor-pointer" />
			<FaWhatsapp className="hover:scale-125 transition-all duration-500 cursor-pointer" />
		</div>
	)
}

const Footer: React.FC = () => {
	return (
		<footer className="w-full 2xl:h-[80vh] xl:pt-20 2xl:pt-0 text-white" id="footer">
			<div className="flex flex-col h-full text-center pt-10 justify-end items-center">
				<span className="2xl:text-[130px] xl:text-[90px] text-[65px] uppercase leading-none font-light">Discover</span>
				<span className="2xl:text-[130px] xl:text-[90px] text-[65px] uppercase font-bold leading-none">Our Wailist</span>
				<p className="2xl:text-2xl text-xl text-[#777777] mt-3 mb-2">By signing up, you agree to receive awesome</p>
				{/* <NewsletterForm /> */}
				<div className="w-full flex justify-between max-2xl:flex-col gap-5 items-center 2xl:mt-[150px] mt-[75px] xl:mt-[60px] 2xl:px-24 mb-14">
					<p className="2xl:text-lg text-sm transition-colors duration-500 cursor-pointer max-2xl:hidden">Volver arriba</p>
					<p className="2xl:text-lg text-base transition-colors duration-500">2023 © Todos los derechos reservados</p>
					<SocialIcons />
				</div>
			</div>
		</footer>
	)
}

export default Footer
