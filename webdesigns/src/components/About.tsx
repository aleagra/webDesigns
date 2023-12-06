import Image from 'next/image'
import foto from '../public/img/foto1.jpg'
const About: React.FC = () => {
	return (
		<>
			<section>
				<div className="w-[50%] flex border border-black">
                <Image src={foto} alt="Your Alt Text" width={800} height={300} />
				</div>
			</section>
		</>
	)
}
export default About
