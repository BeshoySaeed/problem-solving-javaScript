var maxArea = function (height) {
  // let arrOfMax = [];
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    let area = Math.min(height[start], height[end]) * (end - start);

    maxArea = Math.max(maxArea, area);
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  // for (let i = 0; i < height.length; i++) {
  //   console.log(height[i]);
  //   for (let j = i + 1; j < height.length; j++) {
  //     console.log("j", height[j]);
  //     let area = Math.min(height[i], height[j]) * (j - i);
  //     console.log("i j", i, j);
  //     console.log("area", area);
  //     arrOfMax.push(area);
  //   }
  // }

  // return Math.max(...arrOfMax);
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
