var uniqueOccurrences = function (arr) {
  let uniqueOccurrences = {};
  let occurrencesArr = [];
  for (let num of arr) {
    uniqueOccurrences[num] = (uniqueOccurrences[num] || 0) + 1;
  }
  for (let num in uniqueOccurrences) {
    occurrencesArr.push(uniqueOccurrences[num]);
  }
  const uniqueSet = new Set(occurrencesArr);
  return uniqueSet.size == occurrencesArr.length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
