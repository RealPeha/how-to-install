const visit = require('unist-util-visit')
const nodeToString = require('mdast-util-to-string')

const highlightCode = require('./highlightCode')

module.exports = ({ markdownAST }) => {
	visit(markdownAST, 'code', node => {
		const lang = node.lang || 'bash'

		const code = nodeToString(node)
		const output = highlightCode(lang, code)

		node.type = 'html'
		node.value = `
			<div class='gatsby-highlight'>
				<pre class='language-${lang}'><code>${output}</code></pre>
			</div>
		`.trim()
	})

	return markdownAST
}
