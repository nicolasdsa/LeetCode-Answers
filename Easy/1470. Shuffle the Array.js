/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const numsPart1 = nums.slice(0, n);
  const numsPart2 = nums.slice(n);
  let j = 0;

  const length = numsPart1.length;
  let arrayResponse = [];

  for (var i = 0; i < length; i++) {
    arrayResponse[j] = numsPart1[i];
    j++;
    arrayResponse[j] = numsPart2[i];
    j++;
  }

  return arrayResponse;
};
