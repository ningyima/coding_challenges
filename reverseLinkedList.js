/**
 * Definition for singly-linked list
 * function ListNode(val) {
 *    this.val = val;
 *    this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
function LinkedList() {
  this.head = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

LinkedList.prototype.reverse = function() {
  var curr = this.head;
  var next = null;
  var prev = null;

  while(curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  this.head = prev;
}

var myLL = new LinkedList();
myLL.add(10);
myLL.add(30);
myLL.add(50);
myLL.reverse();
console.log(myLL);
