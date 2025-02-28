
function factorial(n) {
    // Write your code here
    if (n <= 1)
    {
        return n
        }
    else{
        return n*factorial(n-1)
    }
}
console.log(factorial(3))
console.log(factorial(4))