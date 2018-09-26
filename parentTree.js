// Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

// For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
            
// 1   2   4
//  \ /   / \
//   3   5   8
//    \ / \   \
//     6   7   9

// Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

var parentChildPairs = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [8, 9]
];

// Sample output (pseudocode):
// [
//   [1, 2, 4],   // Individuals with zero parents
//   [5, 7, 8, 9] // Individuals with exactly one parent
// ]

const specialChildren = function(parentChildPairs) {
  let results = []; 
  let zeroParents = []; 
  let oneParents = [];
  
  
  for (let i = 0; i < parentChildPairs.length; i++) {
    let hasZeroParents = true;
    
    for (let j = 0; j < parentChildPairs.length; j++) {
      if (parentChildPairs[i][0] === parentChildPairs[j][1]) {
        hasZeroParents = false;
        break;
      }      
    }
    
    if (hasZeroParents === true && !zeroParents.includes(parentChildPairs[i][0])) {
      zeroParents.push(parentChildPairs[i][0]);
    }
  }
  
  for (let i = 0; i < parentChildPairs.length; i++) {
    let count = 0;
    
    for(let j = 0; j < parentChildPairs.length; j++) {
      if (parentChildPairs[i][1] === parentChildPairs[j][1]) {
        count++;
        if (count > 1) {
          break;
        }
      }
    }
    
    if (count === 1 && !oneParents.includes(parentChildPairs[i][1])) {
      oneParents.push(parentChildPairs[i][1]);
    }
  }
  
  results.push(zeroParents.sort((a, b) => a - b));
  results.push(oneParents.sort((a, b) => a - b));
  return results;
}

console.log(specialChildren(parentChildPairs));
