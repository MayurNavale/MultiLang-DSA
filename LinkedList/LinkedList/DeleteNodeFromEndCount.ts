
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/1316595502/

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    if (head === null || head.next === null) return null;

    let temp: ListNode | null = head;
    let count = 0;

    while (temp !== null) {
        count++;
        temp = temp.next;
    }

    n = count - n + 1;
    temp = head;

    for (let i = 1; i < n - 1; i++) {
        temp = temp.next!;
    }

    if (n === 1) {
        return head.next;
    }

    if (temp.next) {
        temp.next = temp.next.next;
    }

    return head;
}


