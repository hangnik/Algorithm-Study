const solution = lines => {
	const start = Math.min(...lines.flat())
	const end = Math.max(...lines.flat())
	const exist = Array(end - start + 1).fill(0)
	
	lines.forEach(el => {
		for (let i = el[0]; i < el[1]; i++) {
			exist[i - start] += 1;
		}
	})

	return exist.reduce((a,c)=> c > 1 ? a + 1 : a, 0)
}