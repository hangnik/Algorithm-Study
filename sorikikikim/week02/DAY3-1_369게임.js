const solution = order => {
  return  order.toString().split('').filter(ele => ["3", "6", "9"].includes(ele)).length;
}