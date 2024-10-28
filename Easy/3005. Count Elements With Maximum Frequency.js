/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let json = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in json) {
      json[nums[i]]++;
      continue;
    }

    json[nums[i]] = 1;
  }

  const values = Object.values(json);

  const maxFrequency = Math.max(...values);

  let result = 0;

  for (const property in json) {
    if (json[property] == maxFrequency) {
      result += json[property];
    }
  }

  return result;
};
