// Remove duplicate characters from a string. 

// example input: helloworld 
// example output: helowrd
/**
 * @param {string}
 * @returns {string}
 */

function removeDuplicatedChars(str) {
  if (str.length === 0) {
      return '';
    }
    
  let map = {};
  let result = '';
  
  // 
  
  for (let i = 0; i < str.length; i++) {
      if (map[str[i]] !== undefined) {
          map[str[i]] = 1;
          resuslt += map[str[i]];
      }           
  }
  
  return result;
}