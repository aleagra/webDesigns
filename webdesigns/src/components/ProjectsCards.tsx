const ProjectsCards: React.FC = () => {
	return (
		<>
			<section className="rounded-lg border-2 border-black relative h-[370px] grid grid-rows-[280px_1fr] hover:text-white hover:bg-[#2a1767] hover:border-indigo-600 transition duration-500 ease-out bg-[#171718]">
				<img src="/project.jpeg" alt="Project" className="w-full h-[280px] object-cover rounded-t-lg" />
				<div className="w-full px-8 flex flex-col justify-center text-white row-start-2">
					<h3 className="text-xl font-bold leading-5">Alejandro Agra</h3>
					<p className="text-xl font-medium text-[#888]">Web Desing</p>
				</div>
			</section>
		</>
	)
}

export default ProjectsCards
