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
			className="flex w-full justify-between items-center py-14 px-24 cursor-pointer border-t group last:border-b border-[#0d0d0d] transition-all duration-200 hover:opacity-50 project"
		>
			<h2 className="text-7xl">{title}</h2>
			<p>Design & Development</p>
		</div>
	)
}
