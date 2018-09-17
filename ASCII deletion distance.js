/**
 * The deletion distance between two strings is the minimum sum of ASCII values of characters that you need to delete in the two strings in order to have the same string. The deletion distance between cat and at is 99, because you can just delete the first character of cat and the ASCII value of 'c' is 99. The deletion distance between cat and bat is 98 + 99, because you need to delete the first character of both words. Of course, the deletion distance between two strings can't be greater than the sum of their total ASCII values, because you can always just delete both of the strings entirely. Implement an efficient function to find the deletion distance between two strings. You can refer to the Wikipedia article on the algorithm for edit distance if you want to. The algorithm there is not quite the same as the algorithm required here, but it's similar.
 */

function ascii_deletion_distance(str1, str2) {
  if(str1.length == 0) return str2.length; 
  if(str2.length == 0) return str1.length; 

  var matrix = [];

  // increment along the first column of each row
  for(let i = 0; i <= str2.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  for(let j = 0; j <= str1.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(let i = 1; i <= str2.length; i++){
    for(let j = 1; j <= str1.length; j++){
      if(str2.charAt(i-1) == str1.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                         Math.min(matrix[i][j-1] + 1, // insertion
                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[str2.length][str1.length];  
}