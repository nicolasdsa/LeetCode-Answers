/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
  const totalTime = arrivalTime + delayedTime;

  if(totalTime == 24){
      return 0;
  }

  if(totalTime > 24){
      return totalTime - 24;
  }

  return totalTime;
  
};