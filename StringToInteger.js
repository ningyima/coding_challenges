/**
 * @param {string} str
 * @returns {number}
 */
var myAtoi = function (str) {
  let result = parseInt(str, 10);
  if (Number.isNaN(result)) {
    result = 0;
  }

  if (result > 2147483647) {
    result = 2147483647;
  }

  if (result < -2147483648) {
    result = -2147483648;
  }

  return result;
}