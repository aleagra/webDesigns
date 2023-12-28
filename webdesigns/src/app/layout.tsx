import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

const spartan = Poppins({ weight: ['400', '600', '800', '300', '700', '500'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Web Designs Latam',
	description: '',
}

interface RootLayoutProps {
	children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body className={spartan.className}>{children}</body>
		</html>
	)
}

export default RootLayout
