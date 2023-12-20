'use client'
import { projectData } from '@/utils/data'
import { Cards } from './Cards'
import { useState } from 'react'
import { Modal } from './Modal'

export const Projects: React.FC = () => {
	const [modal, setModal] = useState({ active: false, index: 0 })

	return (
		<main className="flex flex-col h-screen mt-20 items-center justify-center">
			{/* <h1 className="text-center font-medium text-8xl py-4">More Projects</h1> */}
			<div className="w-[1300px] flex flex-col items-center justify-center">
				{projectData.map((project, index) => {
					return <Cards index={index} title={project.title} setModal={setModal} key={index} />
				})}
			</div>
			<Modal modal={modal} projects={projectData} />
		</main>
	)
}
