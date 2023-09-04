const solution = s => {
	let result = "";
	for (let i = 0; i < s.length; i++) {
			if (s.split(s[i]).length === 2)
					result += s[i]
	}
	return result.split('').sort().join('')
}