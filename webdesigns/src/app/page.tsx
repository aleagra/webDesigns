import dynamic from 'next/dynamic'
import Homepage from '@/components/homepage/Homepage'
import Navbar from '@/components/navbar/Navbar'

const Project = dynamic(() => import('@/components/works/Projects'), { ssr: false })
const Projects = dynamic(() => import('@/components/projects/Projects').then(m => ({ default: m.Projects })), { ssr: false })
const Pricing = dynamic(() => import('@/components/pricing/Pricing'), { ssr: false })
const Footer = dynamic(() => import('@/components/footer/Footer'), { ssr: false })

const Home: React.FC = () => {
	return (
		<>
			<Navbar />
			<Homepage />
			<Project />
			<Projects />
			<Pricing />
			<Footer />
		</>
	)
}
export default Home
