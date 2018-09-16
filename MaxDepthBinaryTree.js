/**
 * Definition for a binary tree node
 * function TreeNode(val) {
 *    this.val = val;
 *    this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
  function countDepth(node) {
    if (!node) {
      return 0;
    } else {
      return (Math.max(countDepth(node.left), countDepth(node.right)) + 1);
    }
  }

  return countDepth(root);
}