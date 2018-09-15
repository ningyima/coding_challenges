/**
 * 
 * @param {number} array 
 * @returns {number}
 */

var maxRangeSum = function(array) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  array.forEach(element => {
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

console.log(maxRangeSum([7, -3, -10, 4, 2, 8, -2, 4, -5, -6]));

