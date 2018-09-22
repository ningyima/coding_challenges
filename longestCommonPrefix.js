/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
All given inputs are in lowercase letters a-z
*/
/**
 * @param {string[]} strs
 * @returns {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    let isBreak = false;
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].length < i || strs[j][i] !== char) {
        isBreak = true;
        break;
      }
    }
    if (isBreak) {
      break;
    }
    result += strs[0][i];
  }
  return result;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
