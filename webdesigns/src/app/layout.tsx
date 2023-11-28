import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

const spartan = League_Spartan({ subsets: ['latin'] })

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
