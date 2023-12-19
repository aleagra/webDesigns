import Footer from '@/components/Footer'
import Homepage from '@/components/Homepage'
import Pricing from '@/components/Pricing'
// import Projects from '@/components/Projects'
import Pruebanav from '@/components/navbar/nav'
import Project from '@/components/projects/Projects'

const Home: React.FC = () => {
	return (
		<>
			<Pruebanav />
			<Homepage />
			<Project />
			{/* <Projects /> */}
			<Pricing />
			<Footer />
		</>
	)
}
export default Home
