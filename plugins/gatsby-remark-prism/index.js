const visit = require('unist-util-visit')
const nodeToString = require('mdast-util-to-string')
const dedent = require('dedent')

const highlightCode = require('./highlight-code')

module.exports = ({ markdownAST }) => {
	visit(markdownAST, 'code', node => {
		const lang = node.lang || 'bash'

		const code = nodeToString(node)
		const output = highlightCode(lang, code)

		node.type = 'html'
		node.value = dedent`
      <div class='gatsby-highlight'>
        <pre class='language-${lang}'><code>${output}</code></pre>
      </div>
    `
	})

	return markdownAST
}
