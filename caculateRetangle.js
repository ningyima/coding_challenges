// Imagine we have an image. We’ll represent this image as a simple 2D array where every pixel is a 1 or a 0. 

// The image you get is known to have multiple rectangles of 0s on a background of 1s. Write a function that takes in the image and outputs the coordinates of all the 0 rectangles -- top-left and bottom-right; or top-left, width and height.

// Sample output (using top-left and bottom-right):
// [[[2,3],[3,5]],
//  [[3,1],[5,1]],
//  [[5,3],[6,4]]]

// For example:
// JavaScript
var image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];


const findRectangle = function(image) {
  
  let results = [];
  
  for (let i = 0; i < image.length; i++) {
        
    for (let j = 0; j < image[i].length; j++) {
      
      if (image[i][j] === 0) {
        let result = [];
        result.push(i);
        result.push(j);
        results.push(result);
      }      
    }
    
  }
  
  
  
  return results;
  
//   let rectangle = [];
//   rectangle.push(results[0]);
  
//   rectangle.push(results[results.length - 1]);
//   return rectangle;
}

console.log(findRectangle(image));
