import { useTranslations } from 'next-intl'
import UseClient from './animation'
import { Switch } from '../Switch'

const Homepage: React.FC = () => {
	const t = useTranslations('Home')
	return (
		<>
			<UseClient />
			<section className="h-screen flex flex-col justify-center items-center bg-[#0c0c0c] text-white contenedor">
				<Switch />
				<div>
					<h1 className="uppercase 2xl:text-[145px] text-[57px] font-light text-center leading-none header-text-1 char"> {t('title')}</h1>
				</div>

				<div>
					<h1 className="uppercase 2xl:text-[145px] text-[57px] text-center leading-none header-text-1 font-bold"> {t('subtitle')}</h1>
				</div>
			</section>
		</>
	)
}

export default Homepage
