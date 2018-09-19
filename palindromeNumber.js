/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x + '';
  let start = 0;
  let end = x.length - 1;

  while (start < end) {
    if (x[start] !== x[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}