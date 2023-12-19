import { projectData } from '@/utils/data'
import ProjectsCards from './ProjectsCards'

const Projects: React.FC = () => {
	return (
		<section className="flex w-full mx-auto min-h-screen items-center" id="proyectos">
			<div className="mx-auto w-[1440px]">
				<div className="my-8 mt-16 text-center">
					<p className="text-2xl font-semibold mx-auto text-[#162a21] mb-7 border-b-4 w-fit border-[#0d0d0d] pb-2">Welcome to Stellar</p>
					<span className="text-7xl font-medium block tracking-tighter m-0 p-0">The most hyper-curated</span>
					<span className="text-7xl font-medium block tracking-tighter m-0 p-0">list of creatives on earth.</span>
				</div>
				{/* <div className="flex gap-4">
					{categories.map((category, index) => (
						<button
							key={index}
							className="px-5 py-3 text-base font-medium transition duration-500 ease-in-out transform bg-[#162a21] text-white border border-gray-600 rounded-full hover:bg-black hover:text-white"
						>
							{category}
						</button>
					))}
				</div> */}
				<div className="gap-12 my-10 mt-10 h-fit grid grid-cols-3">
					{projectData.map((item, index) => (
						<ProjectsCards title={item.title} key={index} img={item.img} name={item.name} />
					))}
				</div>
			</div>
		</section>
	)
}
export default Projects
