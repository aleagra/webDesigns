import type { PricingCardProps } from '@/types/interface'

export const navigation = [
	{ title: 'Products', href: '#proyectos' },
	{ title: 'About', href: '#' },
	{ title: 'Pricing', href: '#pricing' },
	{ title: 'Contact', href: '#footer' },
]
export const pricingData: PricingCardProps[] = [
	{ title: 'Single page', price: 100, features: ['Up to 10 credit cards', 'Up to 1,000 credits', 'Tacky wallet', 'Personal profile only'] },
	{ title: 'Premium page', price: 150, features: ['Up to 10 credit cards', 'Up to 1,000 credits', 'Tacky wallet', 'Personal profile only'] },
	{ title: 'Full Stack', price: 200, features: ['Up to 10 credit cards', 'Up to 1,000 credits', 'Tacky wallet', 'Personal profile only'] },
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
		title: 'Matthias Leidinger',
		description:
			'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
		src: '/photo4.gif',
		link: 'https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/',
		color: '#BBACAF',
	},
	{
		title: 'Clément Chapillon',
		description:
			'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).',
		src: '/photo3.gif',
		link: 'https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/',
		color: '#977F6D',
	},
	{
		title: 'Zissou',
		description:
			'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.',
		src: '/photo.gif',
		link: 'https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/',
		color: '#C2491D',
	},
	{
		title: 'Mathias Svold and Ulrik Hasemann',
		description:
			'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
		src: '/photo.gif',
		link: 'https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/',
		color: '#B62429',
	},
	{
		title: 'Mark Rammers',
		description:
			'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.',
		src: '/photo4.gif',
		link: 'https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/',
		color: '#88A28D',
	},
]
