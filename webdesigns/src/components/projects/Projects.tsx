'use client'
import { projectData } from '@/utils/data'
import { Cards } from './Cards'
import { useState } from 'react'
import { Modal } from './Modal'

export const Projects: React.FC = () => {
	const [modal, setModal] = useState({ active: false, index: 0 })

	return (
		<main className="flex flex-col h-[85vh] items-center bg-[#0c0c0c]">
			<div className="w-full flex flex-col items-center justify-center mt-20">
				{projectData.map((project, index) => {
					return <Cards index={index} title={project.title} name={project.name} setModal={setModal} key={index} />
				})}
			</div>
			<Modal modal={modal} projects={projectData} />
		</main>
	)
}
