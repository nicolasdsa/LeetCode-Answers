/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let day = 0;
  let result = 0;
  let increment = 0;

  for (let i = 0; i < n; i++) {
    day++;
    result += day + increment;

    if (day == 7) {
      day = 0;
      increment++;
    }
  }

  return result;
};
