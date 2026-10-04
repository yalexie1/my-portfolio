export interface Experience {
	role: string;
	company: string;
	location: string;
	dates: string;
	highlights: Highlight[];
}

// A highlight is plain text, or text with one phrase linked
type Highlight = string | { text: string; link: { text: string; href: string } };

// From YaleXie_Resume.pdf, most recent first
export const experience: Experience[] = [
	{
		role: 'Quantitative Research Intern',
		company: 'The Cake Shop Capital',
		location: 'Boston, MA',
		dates: 'Jun 2025 – Aug 2025',
		highlights: [
			'Co-developed a GPT-4o-based NLP pipeline to extract and quantify legal risk changes across sequential SEC 10-K and 10-Q filings, creating an investment signal with a 51.4% backtested cumulative return between 2020 and 2025.',
			'Backtested the trading signal in Python across multiple risk metrics (Fama-French regression, Sharpe ratio, volatility, win/loss ratio), confirming 5.8% annualized statistically significant alpha at 6% annualized volatility.',
		],
	},
	{
		role: 'Research Intern',
		company: 'Davidson College',
		location: 'Remote',
		dates: 'Feb 2025 – Jul 2025',
		highlights: [
			'Built and optimized a statistical model in Python with Bayesian Additive Regression Trees (BART) to assess the relative importance of the Fama-French factors in U.S. large-cap equity returns.',
			'Achieved an R² of 0.87 versus 0.22 for the OLS baseline, demonstrating the model’s ability to capture nonlinear relationships and interactions among factors.',
			{
				text: 'Authored a peer-reviewed research article published in the Pioneer Research Journal.',
				link: {
					text: 'research article',
					href: 'https://pioneeracademics.com/journal/journal-2025/',
				},
			},
		],
	},
	{
		role: 'Data Analytics Intern',
		company: 'Kelleher Consulting Group',
		location: 'Remote',
		dates: 'Feb 2025 – Jul 2025',
		highlights: [
			'Analyzed IPEDS data using Pandas, NumPy, and Matplotlib to size and segment target markets for WorldQuant University’s go-to-market strategy.',
			'Benchmarked competing data-science education products using capability matrices and presented positioning recommendations to the executive team.',
		],
	},
];
