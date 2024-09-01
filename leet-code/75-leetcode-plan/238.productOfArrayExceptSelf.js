// var productExceptSelf = function (nums) {
//   let ans = [];
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         product *= nums[j];
//       }
//     }
//     ans.push(product);
//   }
//   return ans;
// };

// not understand it completely yet
var productExceptSelf = function (nums) {
  let product = 1;
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(product);
    product *= nums[i];
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= product;
    product *= nums[i];
  }

  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));
