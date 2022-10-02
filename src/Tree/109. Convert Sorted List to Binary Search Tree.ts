import { ListNode, TreeNode } from '../common';
export function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (head === null) return null;
  // 把链表转换为数组
  const arr = transfromListToArray(head);
  const helper = (nums: number[], l: number, r: number) => {
    if (l > r) return null;
    const mid = Math.floor((l + r) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = helper(nums, l, mid - 1);
    root.right = helper(nums, mid + 1, r);
    return root;
  };
  return helper(arr, 0, arr.length - 1);
}
function transfromListToArray(head: ListNode | null): number[] {
  const res: number[] = [];
  while (head !== null) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

// 方法二：找到链表的中点 利用快慢指针找到链表的中点，然后把链表分成两部分，递归的构建二叉搜索树
export function sortedListToBST_1(head: ListNode | null): TreeNode | null {
  if (head === null) return null;
  // 把链表转换为数组
  const helper = (l:ListNode,r:ListNode|null) => {
    if (l ===r!) return null;
    const mid = findMidListNode(l,r!);
    return new TreeNode(mid.val, helper(l, mid), helper(mid.next!, r));
  };
  return helper(head,null);
}
function findMidListNode(l:ListNode,r:ListNode): ListNode {
  let slow = l;
  let fast = l;
  while (fast!==r && fast.next!==r) {
    slow = slow.next!;
    fast = fast.next!.next!;
  }
  return slow;
}
