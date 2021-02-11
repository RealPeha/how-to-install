module.exports = {
	pathPrefix: '/how-to-install',
	siteMetadata: {
		title: 'I want to install...',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown',
				path: `${__dirname}/src/markdown`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-autolink-headers',
						options: {
							isIconAfterHeader: true,
						},
					},
					'gatsby-remark-prism',
				],
			},
		},
		{
			resolve: 'gatsby-plugin-catch-links',
			options: {
				excludePattern: /(excluded-link|external)/,
			},
		},
	],
}
