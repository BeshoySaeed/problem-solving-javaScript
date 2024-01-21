var merge = function (nums1, m, nums2, n) {
  let firstArrIndex = m - 1;
  let secondArrIndex = n - 1;
  let mergedArrIndex = m + n - 1;

  while (firstArrIndex >= 0 && secondArrIndex >= 0) {
    if (numsq[firstArrIndex] > num2[secondArrIndex]) {
      nums1[mergedArrIndex] = nums1[firstArrIndex];
      firstArrIndex--;
    } else {
      nums1[mergedArrIndex] = nums2[secondArrIndex];
      secondArrIndex--;
    }
    mergedArrIndex--;
  }

  while (secondArrIndex >= 0) {
    nums1[mergedArrIndex] = nums2[secondArrIndex];
    secondArrIndex--;
    mergedArrIndex--;
}
};
