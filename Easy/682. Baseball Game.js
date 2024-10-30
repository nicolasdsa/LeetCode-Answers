/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let points = [];

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] == "C") {
      points.pop();
      continue;
    }

    if (operations[i] == "+") {
      let score = points[points.length - 1] + points[points.length - 2];
      points.push(score);
      continue;
    }

    if (operations[i] == "D") {
      points.push(points[points.length - 1] * 2);
      continue;
    }

    points.push(parseInt(operations[i]));
  }

  return points.reduce((acc, cur) => acc + cur, 0);
};
