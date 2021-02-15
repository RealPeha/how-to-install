import React from 'react'
import Slugger from 'github-slugger'

const ToC = ({ headings, maxDepth = 1 }) => {
	const slugger = Slugger()

	const filteredHeadings = headings.filter(({ depth }) => depth <= maxDepth)

	if (filteredHeadings.length <= 1) {
		return <div className="toc-wrapper" />
	}

	return (
		<div className="toc-wrapper">
			<div className="toc">
				<div className="toc-menu">
					{filteredHeadings.map(({ value }) => {
						const slug = slugger.slug(value)

						return (
							<a key={slug} href={`#${slug}`}>
								{value}
							</a>
						)
					})}
				</div>
			</div>
			<div className="toc-open">Table of Contents</div>
		</div>
	)
}

export default ToC
