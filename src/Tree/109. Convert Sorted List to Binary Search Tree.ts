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
