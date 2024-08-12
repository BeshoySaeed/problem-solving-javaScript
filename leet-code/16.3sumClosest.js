var threeSumClosest = function (nums, target) {
  let closestSum = Infinity;

  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      console.log("s", sum);
      console.log("sum", sum - target);
      const diff = Math.abs(sum - target);

      if (diff < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
