function getMaxScore(jewels) {
  // Write your code here
  score = 0;
  jewels = [...jewels];
  for (let i = 0; i < jewels.length - 1; i++) {
    console.log(jewels);
    if (jewels[i] == jewels[i + 1]) {
      score++;
      jewels.splice(i, 2);
      i -= 2;
    }
  }
  return score;
}
console.log(getMaxScore(``));
