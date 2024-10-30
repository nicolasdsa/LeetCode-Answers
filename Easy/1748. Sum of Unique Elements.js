/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let json = {};

  nums.forEach((item) => {
    json[item] = (json[item] || 0) + 1;
  });

  return nums
    .filter((item) => json[item] == 1)
    .reduce((acc, cur) => acc + cur, 0);
};
