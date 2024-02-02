import type { PricingCardProps } from '@/types/interface'
import { DiReact, DiHtml5, DiCss3, DiNodejsSmall, DiMongodb, DiBootstrap, DiSass, DiGit, DiJavascript1 } from 'react-icons/di'
import { SiPostman, SiPhp } from 'react-icons/si'
import { BiLogoTypescript, BiLogoGithub, BiLogoTailwindCss, BiLogoFirebase } from 'react-icons/bi'
import { GrMysql } from 'react-icons/gr'
import React from 'react'

export const navigation = [
	{ title: 'Products', href: '#proyectos' },
	{ title: 'About', href: '#' },
	{ title: 'Pricing', href: '#pricing' },
	{ title: 'Contact', href: '#footer' },
]
export const pricingData: PricingCardProps[] = [
	{ title: 'Single page', price: 100, features: ['Up to 1,000 credits', 'Tacky wallet', 'Personal profile only'] },
	{ title: 'Premium page', price: 150, features: ['Up to 1,000 credits', 'Tacky wallet', 'Personal profile only'] },
	{ title: 'Full Stack', price: 200, features: ['Up to 1,000 credits', 'Tacky wallet', 'Personal profile only'] },
]
export const projectData = [
	{ title: 'CryptoWave', src: '/CryptoWave.webp', name: 'Alejandro Agra', color: '#4a449e' },
	{ title: 'Eztranslate', src: '/Eztranslate.webp', name: 'Alejandro Agra', color: '#122040' },
	{ title: 'SocialApp', src: '/SocialApp.webp', name: 'Alejandro Agra', color: '#ff595e' },
	{ title: 'Weatherme', src: '/Weatherme.webp', name: 'Alejandro Agra', color: '#3b5bb5' },
	{ title: 'CryptoWave', src: '/CryptoWave.webp', name: 'Alejandro Agra', color: '#4a449e' },
	{ title: 'Eztranslate', src: '/Eztranslate.webp', name: 'Alejandro Agra', color: '#122040' },
	{ title: 'SocialApp', src: '/SocialApp.webp', name: 'Alejandro Agra', color: '#ff595e' },
]
export const projects = [
	{
		title: 'CryptoWave',
		description:
			'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
		src: '/work.jpg',
		link: 'https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/',
		color: '#BBACAF',
	},
	{
		title: 'Eztranslate',
		description:
			'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French ',
		src: '/work11.png',
		link: 'https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/',
		color: '#977F6D',
	},
	{
		title: 'Zissou',
		description:
			'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.',
		src: '/work10.jpg',
		link: 'https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/',
		color: '#C2491D',
	},
	{
		title: 'Weatherme',
		description:
			'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
		src: '/work8.jpg',
		link: 'https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/',
		color: '#B62429',
	},
	{
		title: 'SocialApp',
		description:
			'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing ',
		src: '/work9.png',
		link: 'https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/',
		color: '#88A28D',
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
