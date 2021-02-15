const Prism = require('prismjs')

const loadLanguage = require('./loadLanguage')
const replaceLinks = require('./replaceLinks')

const highlightCode = (language, code) => {
	if (!Prism.languages[language]) {
		try {
			loadLanguage(language)
		} catch (e) {
			return code
		}
	}

	const highlightedCode = Prism.highlight(code, Prism.languages[language])

	const showCopyButton = !['ini', 'properties'].includes(language)

	return highlightedCode
		.split('\n')
		.map(highlightedLine => {
			const lineWithLinks = replaceLinks(highlightedLine)

			const cleanLine = replaceLinks(highlightedLine, title => title)
				.replace(/<\/?[^>]+(>|$)/g, '')
				.replace(/\#.+/g, `$'`)

			return `
				<div class='line-wrapper'>
					${
						cleanLine && showCopyButton
							? `<div class='copy-button' title='Copy' onClick='copyToClipboard(\`${cleanLine}\`)'></div>`
							: ''
					}
					<div>${lineWithLinks}</div>
				</div>
			`.trim()
		})
		.join('')
}

module.exports = highlightCode
