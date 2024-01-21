var summaryRanges = function (nums) {
  let flag = 0;
  let range = "";
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (flag == 0) {
      range += nums[i];
    }
    if (nums[i] == nums[i + 1] - 1) {
      flag = 1;
      continue;
    } else {
      if (+range != nums[i]) {
        range += `->${nums[i]}`;
      }
      answer.push(range);
      flag = 0;
      range = "";
    }
  }
  return answer;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
