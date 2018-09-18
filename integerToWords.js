/**
 * 
 * @param {number} number 
 * @returns {string}
 */

let integerToWords = function (number) {
  if (typeof number !== 'number') {
    number = Number(number);
  }

  if (number === 0) {
    return 'ZeroDollar';
  }

  if (number === 1) {
    return 'OneDollar';
  }

  const lessThanTwenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
                          'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
                        'Eighteen', 'Nineteen'];
  const lessThanHundred = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  const suffixMap = ['', 'Thousand', 'Million', 'Billion'];

  const result = [];
  let words;

  while (number !== 0) {
    words = convert(number % 1000, suffixMap.shift());
    number = Math.floor(number / 1000);

    if (words !== undefined) {
      result.unshift(words);
    }
  }

  return `${result.join('')}Dollars`;

  function convert(num, suffix) {
    let results = [];
    if (num >= 100) {
      results.push(lessThanTwenty[Math.floor(num / 100)], 'Hundred');
      num %= 100;
    }

    if (num >= 20) {
      results.push(lessThanHundred[Math.floor(num / 10)]);
      num %= 10;
    }

    if (lessThanTwenty[num]) {
      results.push(lessThanTwenty[num]);
    }

    if (suffix && results.length) {
      results.push(suffix);
    }
    return results.join('');
  }
}