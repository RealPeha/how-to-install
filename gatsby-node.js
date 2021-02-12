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

		const template = require.resolve('./src/PageTemplate.js')

		return data.allMarkdownRemark.edges.forEach(({ node }) => {
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
