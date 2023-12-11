import Image from 'next/image'
import foto from '../public/img/foto1.jpg'
const About: React.FC = () => {
	return (
		<>
			<section>
				<div className="w-full flex flex-col justify-center text-center">
					{' '}
					<h1 className='font-bold text-5xl mt-10'>¿Quienes Somos?</h1>
					<div className='w-full p-20 flex items-center gap-5'>
						<div className="w-[50%] flex border border-black ">
							<Image src={foto} alt="Your Alt Text" width={435} height={300} />
							<div className="flex flex-col justify-center text-center p-6">
							<h1 className='text-2xl mb-2 font-semibold'>Alejandro Agra</h1>
								<h2>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a veniam itaque voluptatem adipisci nemo
									perspiciatis natus iste quibusdam deleniti tenetur ea animi pariatur ipsam, ipsa ad neque libero nisi!
								</h2>
							</div>
						</div>
						<div className="w-[50%] flex border border-black ">
							<div className="flex flex-col justify-center text-center p-6">
								<h1 className='text-2xl mb-2 font-semibold'>Moscoloni Juan Pablo</h1>
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
