/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let result = [];

  for (let i = 0; i < names.length; i++) {
    names[i] = [names[i], heights[i]];
  }

  let test = names.sort(function (a, b) {
    return b[1] - a[1];
  });

  for (let i = 0; i < test.length; i++) {
    result.push(test[i][0]);
  }

  return result;
};
