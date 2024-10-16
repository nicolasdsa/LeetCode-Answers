/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  let returnArray = [];

  for (let i = 0; i < candies.length; i++) {
    returnArray[i] = candies[i] + extraCandies >= maxCandies ? true : false;
  }

  return returnArray;
};
