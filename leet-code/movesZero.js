var moveZeroes = function (nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap non-zero element with the first encountered zero element
      let temp = nums[i];
      nums[i] = nums[nonZeroIndex];
      nums[nonZeroIndex] = temp;

      nonZeroIndex++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

i = 3
0 = 2