var subsets = function (nums) {
  const result = [];
  const subset = [];

  const backtrack = (i) => {
    result.push([...subset]);
    for (let j = i; j < nums.length; j++) {
      console.log(subset);
      subset.push(nums[j]);
      backtrack(j + 1);
      subset.pop();
      console.log(subset);
    }
  };

  backtrack(0);
  return result;
};

console.log(subsets([1, 2, 3]));
