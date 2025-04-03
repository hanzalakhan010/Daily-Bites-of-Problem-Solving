memory = {};
function fibonacci(n) {
  value = memory[n.toString()];
  if (value) {
    return value;
  } else {
    if (n < 2) return n;
    value = fibonacci(n - 1) + fibonacci(n - 2);
    memory[String(n)] = value;
    return value;
  }
}

console.log(fibonacci(10))