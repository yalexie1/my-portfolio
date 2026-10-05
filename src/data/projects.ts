import type { ImageMetadata } from 'astro';
import yaleEvents from '../assets/projects/yale-events.png';
import edgarIntelligence from '../assets/projects/edgar-intelligence.png';
import volatilitySurface from '../assets/projects/volatility-surface.png';
import markowitzFrontier from '../assets/projects/markowitz-frontier.png';

export interface Project {
	title: string;
	description: string;
	repo: string;
	live?: string;
	/** A screenshot or figure from the project itself, faded into the card background */
	image: {
		src: ImageMetadata;
		/** Whether the image has a light or dark background, so it can be inverted to match the theme */
		tone: 'light' | 'dark';
	};
}

// Top pinned repositories from https://github.com/yalexie1
export const projects: Project[] = [
	{
		title: 'Yale Events',
		description:
			'Aggregates 21 Yale event calendars into one central feed, with filters, acronym-aware search, and subscribable iCal feeds that auto-update.',
		repo: 'https://github.com/yalexie1/yale-events',
		live: 'https://yale-events.fly.dev',
		image: { src: yaleEvents, tone: 'dark' },
	},
	{
		title: 'EDGAR Intelligence',
		description:
			'A full-stack RAG application for asking plain-English questions about SEC filings from 13 major tech companies, with answers cited to the source passage, form, and filing date.',
		repo: 'https://github.com/yalexie1/edgar-intelligence',
		live: 'https://edgar-intelligence.vercel.app',
		image: { src: edgarIntelligence, tone: 'light' },
	},
	{
		title: 'Volatility Surface Modeling',
		description:
			'An interactive volatility surface for SPY options using SVI parametrization and least squares optimization.',
		repo: 'https://github.com/yalexie1/volatility-surface-modeling',
		image: { src: volatilitySurface, tone: 'light' },
	},
	{
		title: 'Markowitz Efficient Frontier Modeling',
		description:
			'A Monte Carlo simulation and SciPy optimization of the Markowitz Efficient Frontier on a portfolio of 10 relatively uncorrelated stocks.',
		repo: 'https://github.com/yalexie1/markowitz-efficient-frontier-modeling',
		image: { src: markowitzFrontier, tone: 'light' },
	},
];
