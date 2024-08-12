var frequencySort = function (nums) {
  let frequency = {};
  for (let i of nums) {
    frequency[i] = (frequency[i] || 0) + 1;
  }
  let entries = Object.entries(frequency).sort(
    (a, b) => a[1] - b[1] || b[0] - a[0]
  );

  let ans = [];
  for (let [num, count] of entries) {
    ans.push(...Array(count).fill(num));
  }
  return ans;
};

console.log(frequencySort([2, 3, 1, 3, 2]));
