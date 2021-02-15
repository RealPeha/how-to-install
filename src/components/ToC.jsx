import React, { useState, useRef, useEffect } from 'react'
import Slugger from 'github-slugger'

import classes from '../utils/classes'

const halfWindowHeight = window.innerHeight / 2

const ToC = ({ headings, maxDepth = 1 }) => {
	const [isSticky, setSticky] = useState(false)

	const tocMenuWrapperRef = useRef()
	const tocMenuRef = useRef()

	const slugger = Slugger()

	const filteredHeadings = headings.filter(({ depth }) => depth <= maxDepth)

	const handleScroll = () => {
		if (tocMenuRef.current && tocMenuWrapperRef.current) {
			const tocHeight = tocMenuRef.current.getBoundingClientRect().height
			const tocWrapperOffsetTop = tocMenuWrapperRef.current.getBoundingClientRect().top

			const isSticky = tocWrapperOffsetTop <= halfWindowHeight - tocHeight / 2 - 50

			setSticky(isSticky)
		}
	}

	useEffect(() => {
		handleScroll()

		document.addEventListener('scroll', handleScroll)

		return () => document.removeEventListener('scroll', handleScroll)
	}, [])

	if (filteredHeadings.length <= 1) {
		return <div className="toc-wrapper" />
	}

	return (
		<div className={classes(['toc-wrapper', isSticky && 'sticky'])} ref={tocMenuWrapperRef}>
			<div className="toc">
				<div className="toc-menu" ref={tocMenuRef}>
					{filteredHeadings.map(({ value }) => {
						const slug = slugger.slug(value)

						return <a key={slug} href={`#${slug}`}>{value}</a>
					})}
				</div>
			</div>
			<div className="toc-open">Table of Contents</div>
		</div>
	)
}

export default ToC
