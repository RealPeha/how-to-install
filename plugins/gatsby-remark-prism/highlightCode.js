const Prism = require('prismjs')

const replaceLinks = require('./replaceLinks')

const highlightCode = (language, code) => {
	if (!Prism.languages[language]) {
		try {
			require(`prismjs/components/prism-${language}.js`)
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
							? `<div class='copy-button' title='Copy' onClick='copyToClipboard(\`${Buffer.from(cleanLine).toString('base64')}\`)'></div>`
							: ''
					}
					<div>${lineWithLinks}</div>
				</div>
			`.trim()
		})
		.join('')
}

module.exports = highlightCode
