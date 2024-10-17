/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  let array = [];

  nums.sort(compareNumbers);
  const length = nums.length;

  for (let i = 0; i < length; i += 2) {
    const Alice = nums.shift();
    const Bob = nums.shift();

    array[i] = Bob;
    array[i + 1] = Alice;
  }

  function compareNumbers(a, b) {
    return a - b;
  }

  return array;
};
