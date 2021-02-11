const Prism = require('prismjs')

const languageDependencies = require('./prism-language-dependencies')

const loadPrismLanguage = language => {
	if (Prism.languages[language]) {
		// Don't load already loaded language
		return
	}

	const languageData = languageDependencies[language]

	if (!languageData) {
		throw new Error(`Prism doesn't support language '${language}'.`)
	}

	if (languageData.option === 'default') {
		// Default language has already been loaded by Prism
		return
	}

	if (languageData.require) {
		// Load the required language first
		const requires = Array.isArray(languageData.require)
			? languageData.require
			: [languageData.require]

		requires.forEach(loadPrismLanguage)
	}

	require(`prismjs/components/prism-${language}.js`)
}

module.exports = loadPrismLanguage
