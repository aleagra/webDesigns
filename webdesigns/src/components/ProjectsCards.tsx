import type { ProjectCardProps } from '@/types/interface'

const ProjectsCards: React.FC<ProjectCardProps> = ({ img, title, name }) => {
	return (
		<>
			<section className="rounded-lg border-4 shadow-lg border-white relative h-[400px] grid grid-rows-[300px_1fr] hover:text-white hover:bg-[#162a21] hover:border-[#162a21] transition duration-500 ease-out bg-white hover:-translate-y-3">
				<img src={img} alt="Project" className="w-full h-[300px] object-cover rounded-t-lg" />
				<div className="w-full px-8 flex flex-col justify-center row-start-2">
					<p className="text-xl font-bold leading-5">{name}</p>
					<span className="text-xl font-medium text-gray-600">{title}</span>
				</div>
			</section>
		</>
	)
}

export default ProjectsCards
