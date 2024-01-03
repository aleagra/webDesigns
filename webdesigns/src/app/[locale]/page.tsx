import Footer from '@/components/Footer'
import PricingSection from '@/components/Pricing'
import Homepage from '@/components/homepage/Homepage'
import { Marquee } from '@/components/marquee/Marquee'
import Navbar from '@/components/navbar/Navbar'
import { Projects } from '@/components/projects/projects'
import Project from '@/components/works/Projects'

const Home: React.FC = () => {
	return (
		<>
			<Navbar />
			<Homepage />
			<Project />
			<Marquee />
			<Projects />
			<PricingSection />
			<Footer />
		</>
	)
}
export default Home
