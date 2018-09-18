/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (
 * you may want to display this pattern in a fixed font for better legibility)
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Example 1:
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * Example 2:
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
    Explanation:

    P     I    N
    A   L S  I G
    Y A   H R
    P     I
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @returns {string}
 */
var convert = function (s, numRows) {
  if (s.length === 0) {
    return '';
  }

  if (numRows === 1) {
    return s;
  }

  var n = numRows * 2 - 2;
  var results = [];

  for (let k = 0; k < numRows; k++) {
    results.push('');
  }

  for (let i = 0; i < s.length; i++) {
    var lineNumber = i % n;
    if (lineNumber < numRows) {
      results[lineNumber] += s[i];
    } else {
      results[2 * numRows - lineNumber - 2] += s[i];
    }
  }

  return results.join('');
}