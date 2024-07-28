var majorityElement = function (nums) {
  let collectionObj = {};

  for (let i of nums) {
    collectionObj[i] = (collectionObj[i] || 0) + 1;
  }
  for (let num in collectionObj) {
    if (collectionObj[num] > nums.length / 2) return num;
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
