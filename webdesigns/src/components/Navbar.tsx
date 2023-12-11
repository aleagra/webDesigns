import { navigation } from '@/utils/data'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'

const Navbar: React.FC = () => {
	return (
		<>
			<header className="sticky bg-black inset-x-0 top-0 z-50">
				<nav className="flex items-center justify-between h-full p-2 lg:px-8 xl:w-[1200px] mx-auto">
					<div className="flex lg:flex-1">
						<Image src="/logo.png" alt="" width={100} height={100} />
					</div>
					<div className="flex lg:hidden">
						<FaBars className="text-white" />
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item, index) => (
							<a key={index} href={item.href} className="text-base font-semibold leading-6 py-2 text-white hover:text-indigo-600">
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<a href="#" className="text-base font-semibold leading-6 text-white hover:text-indigo-600">
							Log in <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</nav>
			</header>
		</>
	)
}
export default Navbar
