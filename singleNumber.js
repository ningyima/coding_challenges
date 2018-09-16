// Source : https://oj.leetcode.com/problems/single-number/
// Author : Dean Shi
// Date   : 2015-05-29

/**********************************************************************************
 *
 * Given an array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 *
 **********************************************************************************/

/**
* @param {number[]} nums
* @returns {number}
*/
var singleNumber = function(nums) {
  return nums.reduce((pre, curr) => {
    return pre ^ curr;
  })
}