var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // to be sure that the target is not duplicated

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    console.log(nums[i]);
    while (left < right) {
      let firstNum = nums[left];
      let secondNum = nums[right];

      if (nums[i] + firstNum + secondNum > 0) {
        right--;
      } else if (nums[i] + firstNum + secondNum < 0) {
        left++;
      } else {
        result.push([nums[i], firstNum, secondNum]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return result;
};

console.log(threeSum([-2, 0, 0, 2, 2]));
