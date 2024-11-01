/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const array = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];

  const repeats = array.filter((item, index) => array.indexOf(item) !== index);

  return [...new Set(repeats)];
};
