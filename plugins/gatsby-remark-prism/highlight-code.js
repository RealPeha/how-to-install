const Prism = require('prismjs')
const dedent = require('dedent')

const loadPrismLanguage = require('./load-prism-language')

const defaultReplacer = (title, url) =>
	`<a href="${url || `${title}`}">${title}</a>`

const replaceMarkdownLinks = (line, replacer = defaultReplacer) => {
	const links = line.match(/\@.*?\@/g)

	if (links && links.length) {
		links.forEach(link => {
			const [, title] = link.match(/\@(.*?)[\s|@]/) || []
			const [, url] = link.match(/\s(.*?)\@/) || []

			line = line.replace(link, replacer(title, url))
		})
	}

	return line
}

const highlightCode = (language, code) => {
	if (!Prism.languages[language]) {
		try {
			loadPrismLanguage(language)
		} catch (e) {
			return code
		}
	}

	const showCopyButton = code && !['ini', 'properties'].includes(language)

	const highlightedCode = Prism.highlight(code, Prism.languages[language])

	return highlightedCode
		.split('\n')
		.map(highlightedLine => {
			const lineWithLinks = replaceMarkdownLinks(highlightedLine)

			const cleanLine = replaceMarkdownLinks(
				highlightedLine,
				title => title,
			).replace(/<\/?[^>]+(>|$)/g, '')
			const commentStart = cleanLine.indexOf('#')
			const code =
				commentStart !== -1
					? cleanLine.slice(0, commentStart)
					: cleanLine

			return dedent`
        <div class='line-wrapper'>
          <div class='${
				showCopyButton ? 'copy-button' : ''
			}' title='Copy' onClick='copyToClipboard(\`${code}\`)'></div>
          <div>${lineWithLinks}</div>
        </div>
      `
		})
		.join('')
}

module.exports = highlightCode
