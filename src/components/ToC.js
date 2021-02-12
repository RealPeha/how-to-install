import React from 'react'
import { Link } from 'gatsby'
import Slugger from 'github-slugger'

const ToC = ({ headings, maxDepth = 1 }) => {
	const slugger = Slugger()

	const filteredHeadings = headings.filter(({ depth }) => depth <= maxDepth)

	return (
		<div className="toc-wrapper">
			<div className="toc">
				{filteredHeadings.length > 1 ? (
					<div className="toc-menu">
						{filteredHeadings.map(({ value }) => {
							const slug = slugger.slug(value)

							return (
								<Link key={slug} to={`#${slug}`}>
									{value}
								</Link>
							)
						})}
					</div>
				) : null}
			</div>
			<div className="toc-open">Table of Contents</div>
		</div>
	)
}

export default ToC
