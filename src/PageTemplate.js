import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import App from './App'
import HeaderSearch from './components/HeaderSearch'
import ToC from './components/ToC'

const PageTemplate = ({ data, pageContext }) => {
	const { markdownRemark, allMarkdownRemark } = data
	const { frontmatter: meta, html, headings } = markdownRemark

	const pages = allMarkdownRemark.edges.map(page => page.node.frontmatter)
	const slug = pageContext.slug.substr(1)

	return (
		<App>
			<Helmet>
				<title>{`How to install ${meta.title} on Linux, Mac, Windows`}</title>
			</Helmet>
			<HeaderSearch
				pages={pages}
				query={slug}
				className="disable-flex-grow"
			/>

			<div className="install-guide-wrapper">
				<ToC headings={headings} />
				<div className="install-guide">
					<div
						className="install-guide-content"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
					<div className="footer">
						<a
							href={`https://github.com/RealPeha/how-to-install/edit/master/src/markdown/${slug}.md`}
							target="_blank"
						>
							Edit this page on GitHub
						</a>
					</div>
				</div>

				<div className="empty-column" />
			</div>
		</App>
	)
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			headings {
				value
				depth
			}
			frontmatter {
				slug
				title
			}
		}
		allMarkdownRemark(limit: 1000) {
			edges {
				node {
					frontmatter {
						slug
						keywords
						title
					}
				}
			}
		}
	}
`

export default PageTemplate
