import React from 'react'
import { Link } from 'gatsby'
import Slugger from 'github-slugger'

const ToC = ({ headings, maxDepth = 1 }) => {
	const slugger = Slugger()

	return (
		<div className="toc">
			<div className='toc-menu'>
				{
					headings
						.filter(({ depth }) => depth <= maxDepth)
						.map(({ value }) => {
							const slug = slugger.slug(value)

							return (
								<Link key={slug} to={`#${slug}`}>
									{value}
								</Link>
							)
						})
				}
			</div>
			<div className='toc-open'>Table of Contents</div>
		</div>
	)
}

export default ToC
