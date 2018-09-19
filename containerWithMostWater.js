/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 * 
 * Example:
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 */
/**
 * @param {number[]} height
 * @returns {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    result = Math.max(result, (right - left) * Math.min(height[left], height[right]));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}