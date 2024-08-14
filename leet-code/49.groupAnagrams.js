var groupAnagrams = function (strs) {
  let result = {};
  for (let i of strs) {
    const sorted = i.split("").sort().join("");
    result[sorted] ? result[sorted].push(i) : (result[sorted] = [i]);
  }
  return Object.values(result);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
