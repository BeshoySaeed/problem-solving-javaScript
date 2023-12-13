var maxProduct = function (nums) {
  const childArr = [];
  for (let i = 0; i <= nums.length; i++) {
    if (i < nums.length - 1) {
      for (let y = 0; y < nums.length; y++) {
        if (y != i) {
          childArr.push((nums[i] - 1) * (nums[y] - 1));
        }
      }
    }
  }
  return childArr.reduce((acc, current) => (acc > current ? acc : current));
};

// gpt solution

const maxProduct = function (nums) {
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max2 = nums[i];
    }
  }

  return (max1 - 1) * (max2 - 1);
};

console.log(maxProduct([1, 5, 4, 5]));
