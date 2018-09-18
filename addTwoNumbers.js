/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

 /**
  * Definition for singly-linked list
  * function ListNode(val) {
  *   this.val = val;
  *   this.next = null;
  * }
  */

  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @returns {ListNode}
   */
  var addTwoNumbers = function(l1, l2) {
    const result = new ListNode(0);
    let curr = result;
    let carry = 0;

    while (l1 || l2) {
      if (l1) {
        carry += l1.val;
        l1 = l1.next;
      }

      if (l2) {
        carry += l2.val;
        l2 =l2.next;
      }

      curr = curr.next = new ListNode(carry % 10);
      carry = Math.floor(carry / 10);
    }

    if (carry !== 0) {
      curr.next = new ListNode(carry);
    }

    return result.next;
  }
