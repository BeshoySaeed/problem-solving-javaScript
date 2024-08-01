function count(num) {
  if (num <= 0) {
    console.log("it's done!");
    return;
  }
  console.log(num);
  num--;
  count(num);
}

// count(3);

function sumRange(num) {
  if (num === 1) return num;
  return num + sumRange(num - 1);
}

// console.log(sumRange(4));

function factorial(num) {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(4));

// helper
function collectOddValues(nums) {
  let odds = [];

  function helper(arr) {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) odds.push(arr[0]);
    helper(arr.slice(1));
  }

  helper(nums);
  return odds;
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6]));

function collectOddWithoutHelper(nums) {
  let odds = [];
  if (nums.length === 0) return odds;
  if (nums[0] % 2 !== 0) odds.push(nums[0]);

  odds = odds.concat(collectOddWithoutHelper(nums.slice(1)));
  return odds;
}

console.log(collectOddWithoutHelper([1, 2, 3, 4, 5]));
