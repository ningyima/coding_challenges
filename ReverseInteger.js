/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Example 1:
 * Input: 123
 * Output: 321
 * Example 2:
 * Input: -123
 * Output: -321
 * Example 3:
 * Input: 120
 * Output: 21
 */
var reverse = function(x) {
  const reversed = Math.abs(x).toString().split('').reverse().join('');
  if (reversed >= 2147483648) {
    return 0;
  } else {
    return Math.sign(x) * parseInt(reversed);
  }
}