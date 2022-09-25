import { TreeNode } from './common/TreeNode';
export function inorderTraversal(root: TreeNode | null): number[] {
  if(!root) return []
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right)
  ]
}
