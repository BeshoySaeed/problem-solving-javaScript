var climbStairs = function (n) {
  if (n == 1 || n == 2) {
    return n;
  }

  let ways = new Array(n + 1);
  ways[1] = 1;
  ways[2] = 2;
  for (let i = 3; i < ways.length; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n];
};

console.log(climbStairs(5));
