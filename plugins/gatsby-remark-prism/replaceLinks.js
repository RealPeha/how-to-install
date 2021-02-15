const defaultReplacer = (title, url) =>
	`<a href="${url || `${title}`}" title="How to install ${title}">${title}</a>`

const replaceLinks = (line, replacer = defaultReplacer) => {
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

module.exports = replaceLinks
