/**
 * 
 * @param {number} string 
 * @returns {number}
 */

var maxRangeSum = function(inputString) {
  let inputArray = inputString.split(' ');
  let stockChanges = inputArray.slice(1);

  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  stockChanges.forEach(element => {
    if (typeof element !== 'number') {
      element = Number(element);
    }

    currentSum += element;

    if (maxSum < currentSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  });

  return maxSum;
}

console.log(maxRangeSum('10 7 -3 -10 4 2 8 -2 4 -5 -6'));

