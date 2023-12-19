import Footer from '@/components/Footer'
import Homepage from '@/components/Homepage'
import Pricing from '@/components/Pricing'
import Projects from '@/components/Projects'
import Pruebanav from '@/components/navbar/nav'

const Home: React.FC = () => {
	return (
		<>
			<Pruebanav />
			<Homepage />
			<Projects />
			<Pricing />
			<Footer />
		</>
	)
}
export default Home
