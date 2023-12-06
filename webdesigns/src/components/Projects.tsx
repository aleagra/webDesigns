import ProjectsCards from './ProjectsCards'

const Projects: React.FC = () => {
	return (
		<section className="flex w-full mx-auto py-12 bg-[#f6f5f4] items-center">
			<div className="w-[1300px] mx-auto">
				<div className="mb-8 text-center">
					<h3 className="text-xl font-semibold text-gray-600 mb-7 text-center border-b-2 w-fit mx-auto border-gray-600 pb-2">
						Welcome to Stellar
					</h3>
					<span className="text-7xl font-medium block tracking-tighter m-0 p-0">The most hyper-curated</span>
					<span className="text-7xl font-medium block tracking-tighter m-0 p-0">list of creatives on earth.</span>
				</div>
				<div className="flex gap-4 justify-center">
					<button className="px-5 py-3 text-base font-medium text-center  transition duration-500 ease-in-out transform bg-transparent border border-gray-600 rounded-full hover:bg-black  hover:text-white">
						Branding
					</button>
					<button className="px-5 py-3 text-base font-medium text-center transition duration-500 ease-in-out transform bg-transparent border border-gray-600 rounded-full hover:bg-black  hover:text-white">
						Motion
					</button>
					<button className="px-5 py-3 text-base font-medium text-center transition duration-500 ease-in-out transform bg-transparent border border-gray-600 rounded-full hover:bg-black  hover:text-white">
						Product desing
					</button>
					<button className="px-5 py-3 text-base font-medium text-center transition duration-500 ease-in-out transform bg-transparent border border-gray-600 rounded-full hover:bg-black  hover:text-white">
						Copy writing
					</button>
					<button className="px-5 py-3 text-base font-medium text-center transition duration-500 ease-in-out transform bg-transparent border border-gray-600 rounded-full hover:bg-black  hover:text-white">
						Web Design
					</button>
					<button className="px-5 py-3 text-base font-medium text-center  transition duration-500 ease-in-out transform bg-transparent border border-gray-600 rounded-full hover:bg-black hover:text-white">
						Web Design
					</button>
					<button className="px-5 py-3 text-base font-medium text-center  transition duration-500 ease-in-out transform bg-transparent border border-gray-600 rounded-full hover:bg-black hover:text-white">
						Web Design
					</button>
				</div>
				<div className="gap-12 my-12 h-fit grid grid-cols-3">
					<ProjectsCards />
					<ProjectsCards />
					<ProjectsCards />
				</div>
			</div>
		</section>
	)
}
export default Projects
