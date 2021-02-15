import React from 'react'
import { graphql, Link } from 'gatsby'
import qs from 'qs'

import App from '../App'
import HeaderSearch from '../components/HeaderSearch'

const Search = ({ data, location }) => {
	const { q: query } = qs.parse(location.search, { ignoreQueryPrefix: true })

	const pages = data.allMarkdownRemark.edges.map(
		page => page.node.frontmatter,
	)

	const foundPages = pages.filter(page => {
		return page.keywords
			.split(',')
			.some(keyword => keyword.trim().indexOf(query) > -1)
	})

	return (
		<App>
			<div className="content">
				<HeaderSearch query={query} pages={pages} />
			</div>
			<div>
				{foundPages.length ? (
					foundPages.map(page => (
						<Link key={page.slug} to={page.slug}>
							<h1>{page.slug}</h1>
						</Link>
					))
				) : (
					<h1>Not found</h1>
				)}
			</div>
		</App>
	)
}

export const pageQuery = graphql`
	{
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

export default Search
