// Returns number of complete beeramid levels
function beeramid(bonus, price) {
    for (let n = 1; n <= bonus / price; n++) {
      sum = price * n * (n + 1) * (2 * n + 1) * (1 / 6);
      if (sum > bonus) {
        return n-1;
      } else if (sum >= bonus) {
        return n ;
      }
    }
    return 0;
  }
console.log(beeramid(4, 4));
