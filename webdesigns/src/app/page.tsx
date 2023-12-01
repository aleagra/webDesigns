import Homepage from '@/components/Homepage'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Projects from '@/components/Projects'

const Home: React.FC = () => {
	return (
		<>
			<Navbar />
			<Homepage />
			<Pricing />
			<Projects />
		</>
	)
}
export default Home
