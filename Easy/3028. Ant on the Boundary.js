/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let temp = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];

    if (temp == 0) {
      result++;
    }
  }

  return result;
};
