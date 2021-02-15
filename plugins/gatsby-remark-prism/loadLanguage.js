const Prism = require('prismjs')

const loadLanguage = language => {
	if (Prism.languages[language]) {
		return
	}

	require(`prismjs/components/prism-${language}.js`)
}

module.exports = loadLanguage
