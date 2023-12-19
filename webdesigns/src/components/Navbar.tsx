import { FaBars } from 'react-icons/fa'
import { LiaBarsSolid } from 'react-icons/lia'

const Navbar: React.FC = () => {
	return (
		<>
			<header className="sticky bg-[#162a21] inset-x-0 top-0 z-50 nav">
				<nav className="flex items-center justify-between h-full p-6 px-8 mx-auto">
					<div className="flex lg:flex-1">
						<h1 className="text-2xl tracking-tight text-white py-3 font-medium logo">Web Designs Latam</h1>
					</div>
					<div className="flex lg:hidden ">
						<FaBars className="text-white" />
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{/* {navigation.map((item, index) => (
							<a key={index} href={item.href} className="text-base font-semibold leading-6 py-2 text-white hover:text-indigo-600">
								{item.name}
							</a>
						))} */}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end menu">
						<div className="bg-white p-5 rounded-full">
							<LiaBarsSolid className=" text-2xl text-[#292929]" />
						</div>
					</div>
				</nav>
			</header>
		</>
	)
}
export default Navbar
