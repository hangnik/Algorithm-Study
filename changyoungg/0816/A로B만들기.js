function solution(before, after) {
    let b = before.split('').sort().join('');
    let a = after.split('').sort().join('');
    return a === b ? 1 : 0;
  }