const ProjectsCards: React.FC = () => {
	return (
		<>
			<section className="rounded-lg border-2 shadow-lg border-white relative h-[370px] grid grid-rows-[280px_1fr] hover:text-white hover:bg-black hover:border-black transition duration-500 ease-out bg-white ">
				<img src="/project.jpeg" alt="Project" className="w-full h-[280px] object-cover rounded-t-lg" />
				<div className="w-full px-8 flex flex-col justify-center row-start-2">
					<h3 className="text-xl font-bold leading-5">Alejandro Agra</h3>
					<p className="text-xl font-medium text-[#888]">Web Desing</p>
				</div>
			</section>
		</>
	)
}

export default ProjectsCards
