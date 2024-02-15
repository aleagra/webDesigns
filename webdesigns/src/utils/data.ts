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
		title: 'CryptoWave',
		description:
			'A platform dedicated to cryptocurrencies, a virtual space designed to provide you with clear and accurate information about digital currencies. Explore detailed price listings and real-time conversions, all in one place.',
		src: '/work.webp',
		link: 'https://cryptowave.web.app/',
		color: '#BBACAF',
		technologies: ['next', 'react', 'tailwind'],
	},
	{
		title: 'Eztranslate',
		description:
			'Explore our language translation platform. Delve into detailed translations and real-time updates, all in one place. Stay informed about language options with our intuitive website, your reliable ally for effective communication and overcoming language barriers.',
		src: '/work11.webp',
		link: 'https://eztranslate.netlify.app/',
		color: '#977F6D',
		technologies: ['next', 'typescript', 'tailwind'],
	},

	{
		title: 'Weatherme',
		description:
			'Explore our weather platform, a virtual space designed to provide you with the most accurate and easy-to-understand meteorological information. Delve into detailed forecasts and real-time updates, all in one place. Stay informed about weather conditions with our intuitive website, your reliable ally to plan your days and be prepared for any atmospheric changes.',
		src: '/work10.webp',
		link: 'https://weather-me.web.app/',
		color: '#B62429',
		technologies: ['react', 'tailwind'],
	},
	{
		title: 'SocialApp',
		description:
			'An exciting social network built from the ground up using React and Node.js. Immerse yourself in this distinctive platform where interaction and connection become straightforward and captivating. Enjoy an intuitive experience, courtesy of React power, while Node.js propels the resilience and speed of our network.',
		src: '/work9.webp',
		link: 'https://social-application.web.app/',
		color: '#88A28D',
		technologies: ['next', 'react', 'nodeJs'],
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
