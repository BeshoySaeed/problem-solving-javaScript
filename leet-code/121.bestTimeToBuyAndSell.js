// time execution O(n**2)
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > 0 && prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      }
    }
  }
  return max;
};

/*
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

var maxProfit = function (prices) {
  let max = 0;
  let lowest = prices[0];
  for (let i = 0; i < prices.length; i++) {
    lowest = Math.min(lowest, prices[i]);
    max = Math.max(max, prices[i] - lowest);
  }
  return max;
};
