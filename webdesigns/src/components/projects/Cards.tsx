import type { CardsProps } from '@/types/interface'

export const Cards: React.FC<CardsProps> = ({ index, title, setModal }) => {
	return (
		<div
			onMouseEnter={() => {
				setModal({ active: true, index })
			}}
			onMouseLeave={() => {
				setModal({ active: false, index })
			}}
			className="flex w-full justify-between items-center py-14 px-24 cursor-pointer border-t-2 group last:border-b-2 border-white  text-white transition-all duration-200 hover:opacity-40 project"
		>
			<h2 className="text-7xl">{title}</h2>
			<p className="text-2xl text-gray-400">Design & Development</p>
		</div>
	)
}
