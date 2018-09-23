/**
 * Given a string containing digits from 2-9 inclusive, 
 * return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below. 
 * Note that 1 does not map to any letters.
 * 
 * Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
/**
 * @param {string} digits
 * @returns {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }

  const PHONE_DIGITS_TO_LETTERS = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  let results = [];
  let letterToDigits = function(word, inputDigits) {
    if (inputDigits.length === 0) {
      results.push(word);
      return;
    }

    let currentDigit = inputDigits[0];
    let remainingDigits = inputDigits.slice(1);

    let letters = PHONE_DIGITS_TO_LETTERS[currentDigit].split('');

    for (let i = 0; i < letters.length; i++) {
      letterToDigits(word + letters[i], remainingDigits);
    }
  }
  letterToDigits('', digits);

  return results;
}