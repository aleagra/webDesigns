import Image from 'next/image'
import foto from '../public/img/foto1.jpg'
const About: React.FC = () => {
	return (
		<>
			<section className="w-full flex flex-col justify-center text-center bg-black">
				<div className="my-8 mt-16 p-4">
					{' '}
					<h1 className="text-6xl font-bold text-center pt-12 mb-4 text-white">¿Quienes Somos?</h1>
					<div className="w-full p-20 flex items-center gap-5">
						<div className="w-[50%] flex border border-white rounded-xl">
							<Image src={foto} alt="Your Alt Text" width={435} height={300} />
							<div className="flex flex-col transition-all duration-500 ease-in-out hover:bg-white hover:text-black text-white justify-center text-center p-6">
								<h1 className="text-2xl mb-2 font-semibold ">Alejandro Agra</h1>
								<h2>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a veniam itaque voluptatem adipisci nemo
									perspiciatis natus iste quibusdam deleniti tenetur ea animi pariatur ipsam, ipsa ad neque libero nisi!
								</h2>
							</div>
						</div>
						<div className="w-[50%] flex border border-white rounded-xl">
							<div className="flex flex-col transition-all duration-500 ease-in-out hover:bg-white hover:text-black text-white justify-center text-center p-6">
								<h1 className="text-2xl mb-2 font-semibold ">Moscoloni Juan Pablo</h1>
								<h2>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a veniam itaque voluptatem adipisci nemo
									perspiciatis natus iste quibusdam deleniti tenetur ea animi pariatur ipsam, ipsa ad neque libero nisi!
								</h2>
							</div>
							<Image src={foto} alt="Your Alt Text" width={435} height={300} />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default About
