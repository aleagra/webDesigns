import Footer from '@/components/Footer'
import Homepage from '@/components/Homepage'
import Pricing from '@/components/Pricing'
import { Marquee } from '@/components/marquee/Marquee'
import Navbar from '@/components/navbar/Navbar'
import { Projects } from '@/components/projects/projects'
import Project from '@/components/works/Projects'

const Home: React.FC = () => {
	return (
		<>
			<Navbar />
			<Homepage />
			<Marquee />
			<Project />
			<Projects />
			<Pricing />
			<Footer />
		</>
	)
}
export default Home
