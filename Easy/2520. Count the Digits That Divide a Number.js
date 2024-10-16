/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const nums = num.toString().split("");
  let response = 0;

  nums.forEach((item) => (num % item == 0 ? response++ : null));

  return response;
};
