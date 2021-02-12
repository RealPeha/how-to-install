import React, { useState, useEffect } from 'react'
import { navigate, Link } from 'gatsby'

const clamp = (n, min, max) => Math.min(Math.max(n, min), max)

const Suggestion = ({ item, isActive }) => {
	return (
		<Link to={item.slug} className={`suggestion ${isActive ? 'active' : ''}`}>
			{item.title}
		</Link>
	)
}

const Suggestions = ({ items }) => {
	const [activeSuggestion, setActiveSuggestion] = useState(-1)

	useEffect(() => {
		setActiveSuggestion(-1)

		const handleKeyDown = (e) => {
			setActiveSuggestion(n => {
				if (e.key === 'ArrowUp') {
					return clamp(n - 1, 0, items.length - 1)
				}
				
				if (e.key === 'ArrowDown') {
					return clamp(n + 1, 0, items.length - 1)
				}
				
				if (e.key === 'Enter' && items && items[n]) {
					navigate(items[n].slug)
				}
	
				return n
			})
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [items])

	return (
		<div className="suggestions" id="suggestions">
			{items.map((item, index) => (
				<Suggestion
					key={item.slug}
					item={item}
					isActive={index === activeSuggestion}
				/>
			))}
		</div>
	)
}

export default Suggestions
