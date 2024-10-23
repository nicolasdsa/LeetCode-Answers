/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let highest = 0;
  let actualAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    actualAltitude += gain[i];

    if (highest < actualAltitude) {
      highest = actualAltitude;
    }
  }

  return highest;
};
