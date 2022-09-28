import { TreeNode } from './common/TreeNode';
export function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
}
export function inorderTraversal_1(root: TreeNode | null): number[] {
  let stack: TreeNode[] = [];
  let visited: number[] = [];
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    //https://stackoverflow.com/questions/65514481/typescript-says-array-pop-might-return-undefined-even-when-array-is-guaranteed
    root = stack.pop()!;
    visited.push(root.val);
    root = root.right;
  }
  return visited;
}
