/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(!head || !head.next) return head;
  let end = head;
  while(end.next){
      let newNode = end.next
      end.next = end.next.next
      newNode.next = head
      head = newNode
  }
  return head
};