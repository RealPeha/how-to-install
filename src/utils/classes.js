const classes = (classesList = []) => {
	return classesList
		.filter(Boolean)
		.join(' ')
}

export default classes
