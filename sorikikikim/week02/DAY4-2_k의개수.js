const solution = (i, j, k) => {
	return Array(j - i + 1).fill(0).map((_, idx) => idx + i).join('').split(k).length - 1;
}