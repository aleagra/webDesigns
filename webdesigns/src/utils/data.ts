import type { PricingCardProps } from '@/types/interface'
import { DiReact, DiHtml5, DiCss3, DiNodejsSmall, DiMongodb, DiBootstrap, DiSass, DiGit, DiJavascript1 } from 'react-icons/di'
import { SiPostman, SiPhp } from 'react-icons/si'
import { BiLogoTypescript, BiLogoGithub, BiLogoTailwindCss, BiLogoFirebase } from 'react-icons/bi'
import { GrMysql } from 'react-icons/gr'
import React from 'react'

export const navigation = [
	{ title: 'Works', href: '#works' },
	{ title: 'Projects', href: '#projects' },
	{ title: 'Pricing', href: '#pricing' },
	{ title: 'Contact', href: '#footer' },
]
export const pricingData: PricingCardProps[] = [
	{ title: 'Single page', price: 100, features: ['3 Sections', 'Web Hosting Premium', 'SSL Certificate (Security)', 'Responsive Design'] },
	{
		title: 'Premium page',
		price: 150,
		features: ['5 Sections', 'Web Hosting Premium', 'SSL Certificate (Security)', 'Responsive Design', 'Integrated WhatsApp'],
	},
	{
		title: 'Ecommerce',
		price: 200,
		features: [
			'+5 Sections',
			'Web Hosting Premium',
			'SSL Certificate (Security)',
			'Responsive Design',
			'Unlimited products and sales',
			'All payment methods',
		],
	},
]
export const projectData = [
	{ title: 'CryptoWave', src: '/CryptoWave.webp', name: 'Alejandro Agra', color: '#4a449e', href: 'https://cryptowave.web.app/' },
	{ title: 'Eztranslate', src: '/Eztranslate.webp', name: 'Alejandro Agra', color: '#122040', href: 'https://eztranslate.netlify.app/' },
	{ title: 'SocialApp', src: '/SocialApp.webp', name: 'Alejandro Agra', color: '#ff595e', href: 'https://social-application.web.app/' },
	{ title: 'Weatherme', src: '/Weatherme.webp', name: 'Alejandro Agra', color: '#3b5bb5', href: 'https://weather-me.web.app/' },
	{ title: 'CryptoWave', src: '/CryptoWave.webp', name: 'Alejandro Agra', color: '#4a449e', href: 'https://cryptowave.web.app/' },
	{ title: 'Eztranslate', src: '/Eztranslate.webp', name: 'Alejandro Agra', color: '#122040', href: 'https://eztranslate.netlify.app/' },
	{ title: 'SocialApp', src: '/SocialApp.webp', name: 'Alejandro Agra', color: '#ff595e', href: 'https://social-application.web.app/' },
]
export const projects = [
	{
		title: 'Lumina FinTech',
		description:
			'A next-generation digital banking platform focused on frictionless experiences. We introduced real-time secure trading dashboards and an intuitive multi-currency ecosystem that increased user retention by 300%.',
		src: '/work10.webp',
		link: '#',
		color: '#1a1b26',
		technologies: ['Next.js', 'React', 'Tailwind', 'Web3'],
	},
	{
		title: 'Aura Boutique',
		description:
			'An immersive, headless e-commerce experience tailored for luxury fashion. We achieved lightning-fast loading speeds and editorial transitions, maximizing conversion rates globally.',
		src: '/work11.webp',
		link: '#',
		color: '#2d2b2a',
		technologies: ['Next.js', 'TypeScript', 'Shopify', 'Framer'],
	},
	{
		title: 'Nexus Analytics',
		description:
			'An enterprise-grade SaaS dashboard for big data visualization. We translated complex data streams into beautifully clean, readable predictive models for rapid decision-making.',
		src: '/work9.webp',
		link: '#',
		color: '#0f172a',
		technologies: ['React', 'Node.js', 'D3.js', 'GraphQL'],
	},
	{
		title: 'Horizon Estate',
		description:
			'A premium digital storefront for a modern architectural firm. We leveraged smooth parallax effects and ultra-high-resolution property tours to establish their industry authority.',
		src: '/work.webp',
		link: '#',
		color: '#27272a',
		technologies: ['Next.js', 'WebGL', 'Tailwind', 'Sanity'],
	},
]
export const skills = [
	{ name: 'React.js', imgSrc: React.createElement(DiReact, { size: 46 }) },
	{ name: 'Node.js', imgSrc: React.createElement(DiNodejsSmall, { size: 46 }) },
	{ name: 'JavaScript', imgSrc: React.createElement(DiJavascript1, { size: 46 }) },
	{ name: 'TypeScript', imgSrc: React.createElement(BiLogoTypescript, { size: 46 }) },
	{ name: 'MySQL', imgSrc: React.createElement(GrMysql, { size: 46 }) },
	{ name: 'Mongo DB', imgSrc: React.createElement(DiMongodb, { size: 46 }) },
	{ name: 'PHP', imgSrc: React.createElement(SiPhp, { size: 46 }) },
	{ name: 'Postman', imgSrc: React.createElement(SiPostman, { size: 44 }) },
	{ name: 'HTML', imgSrc: React.createElement(DiHtml5, { size: 46 }) },
	{ name: 'CSS', imgSrc: React.createElement(DiCss3, { size: 46 }) },
	{ name: 'TailwindCss', imgSrc: React.createElement(BiLogoTailwindCss, { size: 46 }) },
	{ name: 'SASS', imgSrc: React.createElement(DiSass, { size: 46 }) },
	{ name: 'Bootstrap', imgSrc: React.createElement(DiBootstrap, { size: 46 }) },
	{ name: 'Firebase', imgSrc: React.createElement(BiLogoFirebase, { size: 46 }) },
	{ name: 'GitHub', imgSrc: React.createElement(BiLogoGithub, { size: 46 }) },
	{ name: 'Git', imgSrc: React.createElement(DiGit, { size: 52 }) },
]
