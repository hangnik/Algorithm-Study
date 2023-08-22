function solution(s1, s2) {
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    s2.forEach((v) => (v === s1[i] ? result++ : null));
  }
  return result;
}

// filter, includes
