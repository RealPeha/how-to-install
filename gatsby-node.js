exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	return graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`).then(({ data, errors }) => {
		if (errors) {
			return Promise.reject(errors)
		}

		const template = require.resolve('./src/templates/PageTemplate.js')

		const pages = data.allMarkdownRemark.edges

		return pages.forEach(({ node }) => {
			const {
				frontmatter: { slug },
			} = node

			createPage({
				path: slug,
				component: template,
				context: { slug },
			})
		})
	})
}
