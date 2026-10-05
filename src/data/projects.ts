export interface Project {
	title: string;
	description: string;
	repo: string;
	live?: string;
}

// Top pinned repositories from https://github.com/yalexie1
export const projects: Project[] = [
	{
		title: 'Yale Events',
		description:
			'Aggregates 21 Yale event calendars into one central feed, with filters, acronym-aware search, and subscribable iCal feeds that auto-update.',
		repo: 'https://github.com/yalexie1/yale-events',
		live: 'https://yale-events.fly.dev',
	},
	{
		title: 'EDGAR Intelligence',
		description:
			'A full-stack RAG application for asking plain-English questions about SEC filings from 13 major tech companies, with answers cited to the source passage, form, and filing date.',
		repo: 'https://github.com/yalexie1/edgar-intelligence',
		live: 'https://edgar-intelligence.vercel.app',
	},
	{
		title: 'Volatility Surface Modeling',
		description:
			'An interactive volatility surface for SPY options using SVI parametrization and least squares optimization.',
		repo: 'https://github.com/yalexie1/volatility-surface-modeling',
	},
	{
		title: 'Markowitz Efficient Frontier Modeling',
		description:
			'A Monte Carlo simulation and SciPy optimization of the Markowitz Efficient Frontier on a portfolio of 10 relatively uncorrelated stocks.',
		repo: 'https://github.com/yalexie1/markowitz-efficient-frontier-modeling',
	},
];
