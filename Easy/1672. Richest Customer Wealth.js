/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const valueBank = accounts[i].reduce((acc, value) => acc + value, 0);
    if (max <= valueBank) {
      max = valueBank;
    }
  }

  return max;
};
