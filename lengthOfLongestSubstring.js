/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
var lengthofLongestSubstring = function(s) {
  let map = {};
  let start = 0;
  let maxLength = 0;
  let arr = s.split('');

  for (let i = 0; i < s.length; i++) {
    let curr = map[arr[i]];
    if (curr !== undefined && start <= curr) {
      start = curr + 1;
    } else {
      maxLength = Math.max(maxLength, i - start + 1);
    }
    map[arr[i]] = i;
  }

  return maxLength;
}