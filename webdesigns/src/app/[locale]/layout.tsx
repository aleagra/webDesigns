import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
// import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'

const spartan = Poppins({ weight: ['400', '600', '800', '300', '700', '500'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Web Designs Latam',
	description: '',
}

const locales: string[] = ['en', 'es']

interface RootLayoutProps {
	children: React.ReactNode
	params: {
		locale: string
	}
}
const RootLayout: React.FC<RootLayoutProps> = ({ children, params: { locale } }: RootLayoutProps) => {
	if (!locales.includes(locale)) {
		// Aquí asumí que tienes una función notFound() definida en algún lugar.
		// Asegúrate de que la función notFound() esté definida y haga lo que se espera.
		notFound()
	}

	return (
		<html lang={locale}>
			<body className={spartan.className}>{children}</body>
		</html>
	)
}
export default RootLayout
