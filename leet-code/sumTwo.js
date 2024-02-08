// var twoSum = function (nums, target) {
//   for (let i = 0; i <= nums.length; i++) {
//     for (let j = 0; j <= nums.length; j++) {
//       if (j != i && nums[j] + nums[i] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    const modules = target - nums[i];
    const index = nums.indexOf(modules);
    if (index != -1 && index != i) {
      return [i, index];
    }
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));

console.log("padStart");

console.log("3".padStart(2, 0));
