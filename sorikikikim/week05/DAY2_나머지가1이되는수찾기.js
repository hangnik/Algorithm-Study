const solution = (n) => {
    let min = n;
    for (let i = 1; i < n; i++) if (n % i === 1 && min > i) min = i;
    return min;
};
