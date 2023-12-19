import { categories, projectData } from '@/utils/data'
import ProjectsCards from './ProjectsCards'

const Projects: React.FC = () => {
	return (
		<section className="flex w-full mx-auto min-h-screen items-center">
			<div className="w-[1300px] mx-auto">
				<div className="my-8 mt-16s text-center">
					<p className="text-2xl font-semibold text-[#162a21] mb-7 text-center border-b-4 w-fit mx-auto border-[#162a21] pb-2">
						Welcome to Stellar
					</p>
					<span className="text-7xl font-medium block tracking-tighter m-0 p-0">The most hyper-curated</span>
					<span className="text-7xl font-medium block tracking-tighter m-0 p-0">list of creatives on earth.</span>
				</div>
				<div className="flex gap-4 justify-center">
					{categories.map((category, index) => (
						<button
							key={index}
							className="px-5 py-3 text-base font-medium text-center transition duration-500 ease-in-out transform bg-[#162a21] text-white border border-gray-600 rounded-full hover:bg-black hover:text-white"
						>
							{category}
						</button>
					))}
				</div>
				<div className="gap-12 my-12 mt-16 h-fit grid grid-cols-3">
					{projectData.map((item, index) => (
						<ProjectsCards title={item.title} key={index} img={item.img} name={item.name} />
					))}
				</div>
			</div>
		</section>
	)
}
export default Projects
