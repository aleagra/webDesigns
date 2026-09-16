import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

const spartan = Poppins({ weight: ['400', '600', '800', '300', '700', '500'], subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
	metadataBase: new URL('https://web-designs-qudemyt2c-aleagras-projects.vercel.app'),
	title: 'Web Designs Latam | Premium Digital Agency',
	description: 'Web Designs Latam is a premium digital design agency crafting stunning websites, digital experiences and creative solutions for ambitious brands worldwide.',
	keywords: ['web design', 'digital agency', 'web development', 'UI/UX', 'Next.js'],
	openGraph: {
		title: 'Web Designs Latam | Premium Digital Agency',
		description: 'We create stunning digital experiences that captivate your audience and drive results.',
		type: 'website',
	},
}

interface RootLayoutProps {
	children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="es" className="no-drag select-none">
			<body className={spartan.className}>{children}</body>
		</html>
	)
}

export default RootLayout
