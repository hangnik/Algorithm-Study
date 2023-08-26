const solution = numbers => {
	const nums_to_string = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (let i = 0; i < 10; i++) {
			numbers = numbers.replaceAll(nums_to_string[i], nums[i])
	}
	return parseInt(numbers)
}