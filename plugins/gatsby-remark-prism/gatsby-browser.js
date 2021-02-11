exports.onClientEntry = () => {
	window.copyToClipboard = code => {
		const textarea = document.createElement('textarea')

		textarea.setAttribute('style', 'width:1px;border:0;opacity:0;')
		document.body.appendChild(textarea)
		textarea.value = code
		textarea.select()
		document.execCommand('copy')
		document.body.removeChild(textarea)
	}
}
