/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let returnNumberX = 0;
  let returnNumberY = 0;
  let length = moves.split("").length;

  for (let i = 0; i < length; i++) {
    if (moves[i] == "R") {
      returnNumberX++;
    }

    if (moves[i] == "L") {
      returnNumberX--;
    }

    if (moves[i] == "U") {
      returnNumberY++;
    }

    if (moves[i] == "D") {
      returnNumberY--;
    }
  }

  return returnNumberX == 0 && returnNumberY == 0 ? true : false;
};
