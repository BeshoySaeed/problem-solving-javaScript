function removeDuplicates(nums) {
  let left = 0;
  let right = 1;

  while (right <= nums.length - 1) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    } else {
      right++;
    }
  }
  return nums.slice(0, left + 1);
}

console.log(removeDuplicates([1, 1, 2]));
