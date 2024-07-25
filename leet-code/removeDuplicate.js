function removeDuplicates(nums) {
  // Use a Set to efficiently store unique elements
  //   const uniqueSet = new Set(nums);

  // Convert the Set back to an array and return it
  //   return [...uniqueSet];
  const expected = [];
  for (let i = 0; i < nums.length; i++) {
    if (expected.indexOf(nums[i]) === -1) {
      expected.push(nums[i]);
    }
  }
  return expected;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
