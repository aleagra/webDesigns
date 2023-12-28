import type { CardsProps } from '@/types/interface'

export const Cards: React.FC<CardsProps> = ({ index, title, setModal, name }) => {
	return (
		<div
			onMouseEnter={() => {
				setModal({ active: true, index })
			}}
			onMouseLeave={() => {
				setModal({ active: false, index })
			}}
			className="grid grid-cols-3 w-full py-8 px-16 cursor-pointer items-center border-b group button first:border-t border-white/20 text-white transition-all duration-200 project font-medium"
		>
			<h2 className="text-lg">{title}</h2>
			<h2 className="text-center text-xl">Website of the Day</h2>
			<h2 className="text-end text-base">Design & Development</h2>
		</div>
	)
}
