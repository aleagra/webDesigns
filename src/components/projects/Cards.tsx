import type { CardsProps } from '@/types/interface'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

export const Cards: React.FC<CardsProps> = ({ index, title, setModal, name, href }) => {
	return (
		<Link
			href={href}
			target="_blank"
			onMouseEnter={() => {
				setModal({ active: true, index })
			}}
			onMouseLeave={() => {
				setModal({ active: false, index })
			}}
			className="group relative flex flex-col md:flex-row items-start md:items-center justify-between w-full py-8 md:py-10 px-5 md:px-8 border-b border-white/[0.06] first:border-t transition-all duration-500 cursor-pointer select-none no-drag hover:bg-white/[0.06] hover:border-white/30"
		>
			<div className="absolute left-0 top-0 h-full w-[3px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center ease-out" />
			<div className="flex items-center gap-6 md:gap-12 w-full md:w-auto mb-4 md:mb-0 relative z-10">
				<span className="font-mono text-[10px] sm:text-[12px] text-white/20 group-hover:text-white/60 tracking-[0.2em] uppercase shrink-0 transition-colors duration-500">
					0{index + 1}
				</span>

				<h2 className="text-[28px] sm:text-[40px] md:text-[46px] leading-[1] tracking-[-0.03em] uppercase text-white/50 group-hover:text-white transition-all duration-500 md:group-hover:translate-x-4 group-hover:translate-x-2">
					<span className="block font-black">
						{title}
					</span>
				</h2>
			</div>
			<div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-6 md:gap-16 pl-12 md:pl-0 relative z-10">

				<div className="flex flex-col gap-1 md:gap-2 hidden md:flex text-left">
					<span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/20 group-hover:text-white/50 transition-colors duration-500">
						Type
					</span>
					<span className="text-[11px] sm:text-[12px] text-white/50 group-hover:text-white/90 uppercase tracking-widest transition-colors duration-500">
						Website
					</span>
				</div>

				<div className="flex flex-col gap-1 md:gap-2 text-left md:text-right">
					<span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/20 group-hover:text-white/50 transition-colors duration-500 hidden md:block">
						Services
					</span>
					<span className="text-[11px] sm:text-[12px] text-white/50 group-hover:text-white/90 uppercase tracking-widest transition-colors duration-500 hidden md:block">
						Design & Dev
					</span>
					<div className="md:hidden flex flex-col gap-1">
						<span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors duration-500 block">
							Website
						</span>
						<span className="text-[10px] text-white/50 group-hover:text-white/90 uppercase tracking-widest transition-colors duration-500 block">
							Design & Dev
						</span>
					</div>
				</div>

				<div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-500 md:group-hover:scale-110 ml-auto md:ml-0">
					<FiArrowUpRight size={20} className="text-white/40 group-hover:text-black transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</div>
			</div>
		</Link>
	)
}
