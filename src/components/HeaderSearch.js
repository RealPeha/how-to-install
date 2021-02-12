import React, { useState, useMemo } from 'react'
import { navigate } from 'gatsby'

import Suggestions from './Suggestions'

const titles = {
	MaybeThis: 'Maybe this...',
	This: 'THIS',
	Yes: 'YES!',
}

const HeaderSearch = ({ pages = [], query = '', className = '' }) => {
	const [buttonTitle, setButtonTitle] = useState(titles.This)
	const [inputPlaceholder, setInputPlaceholder] = useState(titles.MaybeThis)
	const [inputValue, setInputValue] = useState(query)
	const [inputMaybeValue, setInputMaybeValue] = useState('')
	const [suggestions, setSuggestions] = useState([])

	const keywords = useMemo(
		() =>
			pages.flatMap(page => {
				const keywords = page.keywords
					.split(',')
					.map(keyword => keyword.trim())

				return keywords.length > 1 ? [] : keywords
			}),
		[pages],
	)

	const findPages = value => {
		value = value.toLowerCase()

		const foundPages = pages.filter(page => {
			return (
				page.keywords
					.split(',')
					.some(keyword => keyword.trim().toLowerCase().indexOf(value) > -1) &&
				page.slug !== `/${query}`
			)
		})

		foundPages.length = Math.min(foundPages.length, 5)

		return foundPages
	}

	const handleInputFocus = e => {
		if (inputValue) {
			const foundPages = findPages(e.target.value)

			setSuggestions(foundPages)
		} else {
			const randomTool =
				keywords[Math.floor(Math.random() * keywords.length)]

			setInputMaybeValue(randomTool)
			setInputPlaceholder(`${randomTool}?`)
			setButtonTitle(titles.Yes)
		}
	}

	const handleInputBlur = e => {
		setButtonTitle(titles.This)

		if (
			inputValue &&
			(!e.relatedTarget || !e.relatedTarget.className.includes('suggestion'))
		) {
			setSuggestions([])
		} else if (!e.relatedTarget || e.relatedTarget.id !== 'find') {
			setInputMaybeValue('')
			setInputPlaceholder(titles.MaybeThis)
		}
	}

	const handleChange = e => {
		setInputValue(e.target.value)

		if (e.target.value) {
			const foundPages = findPages(e.target.value)

			setSuggestions(foundPages)
			setButtonTitle(titles.This)
		} else {
			setSuggestions([])

			if (inputPlaceholder === titles.MaybeThis) {
				setButtonTitle(titles.This)
			} else {
				setButtonTitle(titles.Yes)
			}
		}
	}

	const handleSubmit = e => {
		e.preventDefault()

		const tool = inputValue || inputMaybeValue

		if (tool) {
			const foundPages = findPages(tool)

			if (foundPages.length === 1) {
				navigate(foundPages[0].slug)
			} else {
				// navigate(`/search?q=${tool}`)
			}
		}
	}

	return (
		<div className={`header-wrapper ${className}`}>
			<div className="header">
				<h1>What do you want to install?</h1>
				<h2>I want to install...</h2>
				<form className="input-wrapper" onSubmit={handleSubmit}>
					<input
						type="text"
						value={inputValue}
						placeholder={inputPlaceholder}
						autoComplete="off"
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
						onChange={handleChange}
					/>
					<input type="submit" value={buttonTitle} id="find" />
				</form>

				<Suggestions items={suggestions} />
			</div>
		</div>
	)
}

export default HeaderSearch
