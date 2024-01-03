import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export const Switch: React.FC = () => {
	const t = useTranslations('LocaleSwitcher')
	const locale = useLocale()
	const otherLocale = locale === 'en' ? 'es' : 'en'

	return (
		<Link href={'/' + otherLocale} prefetch={false}>
			{t('switchLocale', { locale: otherLocale })}
		</Link>
	)
}
