const solution = (my_str, n) => {
	let new_str = []
	let start = 0;
	while (new_str.join('').length !== my_str.length) {
			new_str.push(my_str.substr(start, n))
			start += n;
			
	}
	return new_str
}