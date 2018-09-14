// Input array : 1, 61, 17, -1, 25, 4, 20, 10.

// Input num, n :  ( one of the numbers in the array )

// Task : Bring all numbers less than n to left side of n and numbers greater than n should come to right side of n.

function lessOrGreater(nums, num) {
  var lessNums = [];
  var greaterNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < num) {
      lessNums.push(nums[i]);
    } else {
      if (nums[i] > num) {
        greaterNums.push(nums[i]);
      }
    }
  }

  return (lessNums.concat(num)).concat(greaterNums);
}

console.log(lessOrGreater([1, 61, 17, -1, 25, 4, 20, 10], 10));