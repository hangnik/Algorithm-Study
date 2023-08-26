const solution = emergency => {
	let copy_emergency = [...emergency].sort((a, b) => b - a);
	return emergency.map(ele => copy_emergency.indexOf(ele) + 1)
}
