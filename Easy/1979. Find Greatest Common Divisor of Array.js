/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let maxValue = nums[0];
  let minValue = nums[0];
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    if (maxValue < nums[i]) {
      maxValue = nums[i];
    }

    if (minValue > nums[i]) {
      minValue = nums[i];
    }
  }

  for (let j = minValue; j > 0; j--) {
    if (maxValue % j == 0 && minValue % j == 0) {
      return j;
    }
  }
};
