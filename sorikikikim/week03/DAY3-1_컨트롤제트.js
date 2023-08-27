const solution = s => {
	let arr = s.split(' ')
	for (let i = arr.length; i > 0; i--) {
			if (arr[i] === 'Z') {
					arr[i - 1] = '0';
					arr[i] = '0';
			}
	}
	return arr.map(ele => parseInt(ele)).filter(ele => ele !== '').reduce((a, c) => a + c, 0)
}