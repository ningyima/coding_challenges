// Reverse a string with built-in functions
function reverseString1(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString1('hello'));

// Reverse a string with iteration
function reverseString2(str) {
  var newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

console.log(reverseString2('hello'));

// Reverse a string with recursion
function reverseString3(str) {
  return (str === '') ? '' : reverseString3(str.substr(1)) + str.charAt(0);
}

console.log(reverseString3('hello'));
