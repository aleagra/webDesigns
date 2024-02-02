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
			className="grid xl:grid-cols-3 grid-cols-2 w-full 2xl:py-8 py-12 xl:px-16 px-8 cursor-pointer items-center border-b group button first:border-t border-white/20 text-white transition-all duration-200 project font-medium"
		>
			<h2 className="2xl:text-lg text-sm">{title}</h2>
			<h2 className="text-center 2xl:text-xl text-xs max-xl:hidden">Website of the Day</h2>
			<h2 className="text-end 2xl:text-base text-xs">Design & Development</h2>
		</div>
	)
}
