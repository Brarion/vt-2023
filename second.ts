// Вам даны два отсортированных связанных списка list1 и list2.
// Объедините два списка в один отсортированный список. Список должен
// быть составлен путем соединения узлов первых двух списков.

// Использовать следующую реализацию:
// class ListNode {
//      val: number
//      next: ListNode | null
//      constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//  }
// }

// mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null

// Например:
// list1 = [1,2,4], list2 = [1,3,4]. [1, 1, 2, 3, 4, 4]
// list1 = [], list2 = []. []
// list1 = [], list2 = [0]

class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
 }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let firstNode: ListNode = new ListNode();
    let merged: ListNode = firstNode;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        merged.next = list1;
        list1 = list1.next;
      } else {
        merged.next = list2;
        list2 = list2.next;
      }
      merged = merged.next;
    }
  
    merged.next = list1 || list2;
    return firstNode.next;
}