import React, { useState, useMemo } from 'react'
import { navigate } from 'gatsby'

import classes from '../utils/classes'

import Suggestions from './Suggestions'

const TITLES = {
	MaybeThis: 'Maybe this...',
	This: 'THIS',
	Yes: 'YES!',
}

const SUGGESTIONS_VISIBLE_COUNT = 10

const HeaderSearch = ({
	pages = [],
	query = '',
	page,
	className = '',
}) => {
	const [buttonTitle, setButtonTitle] = useState(TITLES.This)
	const [inputPlaceholder, setInputPlaceholder] = useState(TITLES.MaybeThis)
	const [inputValue, setInputValue] = useState('')
	const [inputMaybeValue, setInputMaybeValue] = useState('')
	const [suggestions, setSuggestions] = useState([])

	const keywords = useMemo(
		() => pages.flatMap(page => {
			const keywords = page.keywords
				.split(',')
				.map(keyword => keyword.trim())

			return keywords.length > 1 ? [] : keywords
		}),
		[pages],
	)

	const findPages = value => {
		value = value.toLowerCase()

		const foundPages = pages.filter(page => (
			page.keywords
				.split(',')
				.some(keyword => keyword.trim().toLowerCase().indexOf(value) > -1) && page.slug !== `/${query}`
		))

		foundPages.length = Math.min(foundPages.length, SUGGESTIONS_VISIBLE_COUNT)

		return foundPages
	}

	const handleInputFocus = e => {
		if (inputValue) {
			const foundPages = findPages(e.target.value)

			setSuggestions(foundPages)
		} else {
			const randomTool = keywords[Math.floor(Math.random() * keywords.length)]

			setInputMaybeValue(randomTool)
			setInputPlaceholder(`${randomTool}?`)
			setButtonTitle(TITLES.Yes)
		}
	}

	const handleInputBlur = e => {
		setButtonTitle(TITLES.This)

		const relatedTarget = e.relatedTarget
			|| e.explicitOriginalTarget
			|| document.activeElement

		if (
			inputValue
			&& (!relatedTarget || !relatedTarget.className.includes('suggestion'))
		) {
			setSuggestions([])
		} else if (!relatedTarget || relatedTarget.id !== 'find') {
			setInputMaybeValue('')
			setInputPlaceholder(TITLES.MaybeThis)
		}
	}

	const handleChange = e => {
		setInputValue(e.target.value)

		if (e.target.value) {
			const foundPages = findPages(e.target.value)

			setSuggestions(foundPages)
			setButtonTitle(TITLES.This)
		} else {
			setSuggestions([])

			if (inputPlaceholder === TITLES.MaybeThis) {
				setButtonTitle(TITLES.This)
			} else {
				setButtonTitle(TITLES.Yes)
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
			}
		}
	}

	return (
		<div className={classes(['header-wrapper', className])}>
			<div className="header">
				{page
					? (
						<>
							<h1>{`How to install ${page.title}`}</h1>
							<h2>Or maybe you want to install...</h2>
						</>
					)
					: (
						<>
							<h1>What do you want to install?</h1>
							<h2>I want to install...</h2>
						</>
					)}
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
