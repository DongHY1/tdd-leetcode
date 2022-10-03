import { TreeNode } from '../common/TreeNode';
export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  const path: number[] = [];
  const help = (root: TreeNode | null, targetSum: number, path: number[]) => {
    if (!root) return;
    if (!root.left && !root.right && targetSum === root.val) {
      path.push(root.val);
      result.push([...path]);
      path.pop();
      return;
    }
    path.push(root.val);
    help(root.left, targetSum - root.val, path);
    help(root.right, targetSum - root.val, path);
    path.pop();
  };
  help(root, targetSum, path);
  return result;
}
