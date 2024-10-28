/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let steps = 0;
  const total = capacity;

  for (let i = 0; i < plants.length; i++) {
    if (plants[i] <= capacity) {
      capacity -= plants[i];
      steps++;
      continue;
    }

    capacity = total;
    capacity -= plants[i];
    steps += i + (i + 1);
  }

  return steps;
};
