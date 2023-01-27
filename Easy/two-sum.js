/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j == i) {
      } else {
        if (nums[j] + nums[i] == target) {
          result.push(j);
          result.push(i);
          return result;
        }
      }
    }
  }
};
