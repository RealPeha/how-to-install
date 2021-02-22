exports.onClientEntry = () => {
	window.copyToClipboard = base64Code => {
		const textarea = document.createElement('textarea')

		textarea.setAttribute('style', 'width:1px;border:0;opacity:0;')
		document.body.appendChild(textarea)
		textarea.innerHTML = atob(base64Code)
		textarea.select()
		document.execCommand('copy')
		document.body.removeChild(textarea)
	}
}
