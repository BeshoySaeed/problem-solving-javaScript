var permute = function (nums) {
  let result = [];
  const backtrack = (curr, remaining) => {
    if (remaining.length === 0) {
      result.push([...curr]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = remaining.slice(0, i).concat(remaining.slice(i + 1));
      backtrack([...curr, remaining[i]], next);
    }
  };

  backtrack([], nums);
  return result;
};

console.log(permute([1, 2]));
