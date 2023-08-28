function solution(my_str, n) {
  const arr = [];

  for (let i = 0; i < my_str.length; i += n) {
    const new_str = my_str.slice(i, n + i);
    arr.push(new_str);
  }

  return arr;
}

// match...?
