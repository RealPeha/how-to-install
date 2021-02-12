import React from 'react'
import { graphql } from 'gatsby'

import App from '../App'
import HeaderSearch from '../components/HeaderSearch'

const Index = ({ data }) => {
	const pages = data.allMarkdownRemark.edges.map(
		page => page.node.frontmatter,
	)

	return (
		<App className='disable-overflow'>
			<HeaderSearch pages={pages} />
			{/* <div><p>Text</p></div> */}
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

export default Index
