import React from 'react'

import classes from './utils/classes'

// import ThemeSelector from './components/ThemeSelector'

const App = ({ children, className = '' }) => {
	// const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

	return (
		// <div className={`page-wrapper ${theme}`}>
		<div className={classes(['page-wrapper', 'light', className])}>
			{/* <ThemeSelector onSelect={theme => setTheme(theme)} theme={theme} /> */}
			{children}
		</div>
	)
}

export default App
