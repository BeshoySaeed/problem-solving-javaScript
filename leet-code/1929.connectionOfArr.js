var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

// another way

var getConcatenation = function (nums) {
  const n = nums.length;
  const ans = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }

  return ans;
};
