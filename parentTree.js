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
  
  for (let i = 0; i < parentChildPairs.length; i++) {
    let zeroParent = parentChildPairs[i][0];
    let flag = false;
    // console.log(parentChildPairs[i]);

    for(let j = 1; j < parentChildPairs.length; j++) {      
      if (zeroParent !== parentChildPairs[j][1]) {
        flag = !flag;
      }
      
      if (j === parentChildPairs.length - 1 && flag === true) {
        zeroParents.push(zeroParent);
      }
    }
  }
  
  let oneParents = [];
  for (let p = 0; p < parentChildPairs.length; p++) {
    let oneParent = parentChildPairs[p][0];
    let count = 0;

    for(let q = 1; q < parentChildPairs.length; q++) {      
      if (oneParent === parentChildPairs[q][1]) {
        count++;
      }
      
      if(q === parentChildPairs.length - 1 && count === 1) {
        oneParents.push(oneParent);
      }        
    }
  }
  
  results.push(zeroParents);
  results.push(oneParents);
  return results;
}

console.log(specialChildren(parentChildPairs));
