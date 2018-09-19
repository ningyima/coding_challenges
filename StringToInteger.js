/**
 * @param {string} str
 * @returns {number}
 */
var myAtoi = function (str) {
  let result = parseInt(str, 10);
  if (Number.isNaN(result)) {
    return 0;
  }

  if (result > 2147483647) {
    return 2147483647;
  }

  if (result < -2147483648) {
    return -2147483648;
  }

  return result;
}