import { translate } from './anim'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
	return (
		<div className="flex items-end flex-wrap text-sm uppercase mt-10 lg:justify-between text-white font-light">
			<ul className="w-[50%] lg:w-auto mt-3 overflow-hidden">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					<span className="text-[#777777] font-bold">Hecho por:</span> Alejandro Agra y Juan Pablo Moscoloni
				</motion.li>
			</ul>
			<ul className="w-[50%] lg:w-auto mt-3 overflow-hidden p-0">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					<span className="text-[#777777] font-bold">Instagram:</span> dsadasda
				</motion.li>
			</ul>
			<ul className="w-[50%] lg:w-auto mt-3 overflow-hidden p-0">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					<span className="text-[#777777] font-bold">Linkeind:</span> dsadasd
				</motion.li>
			</ul>
			<ul className="w-[50%] lg:w-auto mt-3 overflow-hidden p-0">
				<motion.li custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
					Todos los derechos reservados
				</motion.li>
			</ul>
		</div>
	)
}
