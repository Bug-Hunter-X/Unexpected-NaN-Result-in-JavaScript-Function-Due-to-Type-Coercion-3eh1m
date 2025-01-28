function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (isNaN(x)) {
    return "Invalid input"; // Handle NaN case
  } else {
    return x * 2; // Perform the intended operation
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(NaN)); // Output: Invalid input
console.log(foo(5)); // Output: 10
console.log(foo('abc')); //Output: NaN