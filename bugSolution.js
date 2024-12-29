function foo(x) {
  if (x < 0) {
    return 0; // Handle negative input
  } else if (x === 0) {
    return 1;
  } else {
    return x * foo(x - 1);
  }
}
console.log(foo(5)); // 120
console.log(foo(-1)); // 0