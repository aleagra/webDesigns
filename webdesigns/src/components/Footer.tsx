import Link from 'next/link'
import { BiLogoGithub } from 'react-icons/bi'
import { FaLinkedinIn, FaArrowUp } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
const SocialIcons: React.FC = () => {
	return (
		<div className="text-xl font-semibold flex gap-4">
			<Link
				href="https://www.linkedin.com/in/alejandro-agra/"
				target="_blank"
				className="hover:scale-125 opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer no-drag"
			>
				<FaLinkedinIn />
			</Link>
			<Link
				href="https://github.com/aleagra"
				target="_blank"
				className="hover:scale-125 opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer no-drag"
			>
				<BiLogoGithub />
			</Link>
			<Link
				href="https://ale-agra.web.app/"
				target="_blank"
				className="hover:scale-125 opacity-70 hover:opacity-100 transition	-all duration-500 cursor-pointer no-drag"
			>
				<TbWorld />
			</Link>
		</div>
	)
}

const Footer: React.FC = () => {
	return (
		<footer className="w-full 2xl:h-[80vh] xl:pt-20 2xl:pt-0 text-white relative" id="footer">
			<div className="flex flex-col h-full text-center pt-10 justify-end items-center">
				<span className="2xl:text-[110px] xl:text-[80px] text-[55px] max-md:text-[35px] uppercase leading-none font-light select-none">
					let s create
				</span>
				<span className="2xl:text-[110px] xl:text-[80px] text-[55px] max-md:text-[35px] uppercase font-bold leading-none select-none">
					something great
				</span>
				<p className="2xl:text-2xl text-xl max-md:text-base max-md:px-8 mt-3 mb-2 select-none">
					Contact us and let s bring your vision to life
				</p>
				<div className="w-full flex justify-between max-2xl:flex-col gap-5 items-center 2xl:mt-[150px] mt-[55px] xl:mt-[60px] 2xl:px-24 mb-10">
					<Link href="#" className="overflow-hidden cursor-pointer no-drag">
						<div className="relative w-full h-full flex gap-2 items-center opacity-70 transition-opacity duration-300 hover:opacity-100">
							<FaArrowUp />
							<div className="el text-white w-full h-full bg-[#0c0c0c]">
								<div className="perspectiveText flex flex-col justify-center items-center h-full w-full select-none">
									<p className="m-0 p-0">Back top</p>
									<p className="m-0 p-0">Back top</p>
								</div>
							</div>
						</div>
					</Link>

					<p className="2xl:text-lg text-base opacity-70 transition-colors duration-500 select-none">2024 © All rights reserved</p>
					<SocialIcons />
				</div>
			</div>
		</footer>
	)
}

export default Footer
