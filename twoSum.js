/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  var results = [];

  for (let i = 0; i < nums.length; i++) {
    var diff = target - nums[i];

    if (map[diff] !== undefined) {
      results = [map[diff], i];
    } else {
      map[nums[i]] = i
    }
  }

  return results;
}