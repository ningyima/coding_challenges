// Given an array of positive integers, such as [1, 2, 5, 6, 7, 13], return a string like "1-2, 5-7, 13”
function arrayToString(array) {
  if (array.length === 0) {
    return '';
  }

  var start = array[0];
  var end = 0;
  var result = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i] + 1 === array[i + 1]) {
      end = array[i + 1];
    } else {
      if (end !== 0) {
        result += start + '-' + end + ',';
      } else {
        result += start + ',';
      }
      start = array[i + 1];
      end = 0;
    }
  }

  return result;
}

console.log(arrayToString([1, 2, 5, 6, 7, 13]));