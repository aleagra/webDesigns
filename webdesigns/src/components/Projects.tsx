import ProjectsCards from './ProjectsCards'
import Slider from './Slider'

const Projects: React.FC = () => {
	return (
		<section className="flex w-full mx-auto h-screen bg-black items-center ">
			<div className="w-[1440px] mx-auto">
				<div className="mb-8">
					<h3 className="text-2xl font-semibold text-indigo-600 mb-7 border-b-2 w-fit border-indigo-600 pb-2">Welcome to Stellar</h3>
					<span className="text-white text-7xl font-medium block tracking-tighter m-0 p-0">The most hyper-curated</span>
					<span className="text-white text-7xl font-medium block tracking-tighter m-0 p-0">list of creatives on earth.</span>
				</div>
				<div className="flex gap-4">
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Branding
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Motion
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Product desing
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Copy writing
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Web Design
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Web Design
					</button>
					<button className="px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-600">
						Web Design
					</button>
				</div>
				<div className="gap-12 my-12 h-fit grid grid-cols-3">
					<ProjectsCards />
					<ProjectsCards />
					<ProjectsCards />
				</div>
				<Slider />
			</div>
		</section>
	)
}
export default Projects
