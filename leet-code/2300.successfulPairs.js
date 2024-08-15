var successfulPairs = function (spells, potions, success) {
  let result = [];
  potions = potions.sort((a, b) => a - b);
  for (let i of spells) {
    let left = 0;
    let right = potions.length - 1;
    let prevIndex = potions.length;
    while (left <= right) {
      let middle = Math.floor(left + (right - left) / 2);
      if (i * potions[middle] >= success) {
        right = middle - 1;
        prevIndex = middle;
      } else {
        left = middle + 1;
      }
    }
    result.push(potions.length - prevIndex);
  }
  return result;
};

[1, 2, 3, 4, 8];

// BIG O (n * log(n))
// loop on spells
// nested loop on potion or we can make a binary search for potions to enhance time complexity
// sum the values of potions which valid with the spells
// push it in the array
// finally return the array
