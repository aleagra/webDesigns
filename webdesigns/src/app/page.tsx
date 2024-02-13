import Footer from '@/components/Footer'
import Homepage from '@/components/Homepage'
import Pricing from '@/components/Pricing'
import { Marquee } from '@/components/marquee/Marquee'
import Navbar from '@/components/navbar/Navbar'
import { Projects } from '@/components/projects/Projects'

import Project from '@/components/works/Projects'

const Home: React.FC = () => {
	return (
		<>
			<Navbar />
			<Homepage />
			<Project />
			<Marquee />
			<Projects />
			<Pricing />
			<Footer />
		</>
	)
}
export default Home
