/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result = new ListNode();
    let head = result;
    let sum = 0;
    let nRest = 0;
    while(l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        sum = (val1 + val2 + nRest)%10;
        nRest = Math.floor((val1 + val2 + nRest) / 10);
        head.next = new ListNode(sum);
        head = head.next;
        if(l1) {
            l1 = l1.next;    
        }
        if(l2) {
            l2 = l2.next;    
        }
    }
    if(nRest !== 0) {
        head.next = new ListNode(nRest);
        head = head.next;
    }
    return result.next;
}