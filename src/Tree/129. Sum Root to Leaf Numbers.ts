import { TreeNode } from '../common/TreeNode';
export function sumNumbers(root: TreeNode | null): number {
  return sumTreeNode(root, 0);
}
function sumTreeNode(root: TreeNode | null, cur: number): number {
  if (!root) return 0;
  cur = cur * 10 + root.val;
  if (!root.left && !root.right) return cur;
  return sumTreeNode(root.left, cur) + sumTreeNode(root.right, cur);
}
