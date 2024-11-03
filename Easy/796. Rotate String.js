/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let entryArray = s.split("");
  let lengthArray = entryArray.length;

  for (let i = 0; i < lengthArray; i++) {
    const firstElement = entryArray.shift();
    entryArray.push(firstElement);

    if (entryArray.join("") == goal) {
      return true;
    }
  }

  return false;
};
