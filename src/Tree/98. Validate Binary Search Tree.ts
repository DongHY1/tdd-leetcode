import { TreeNode } from './common/TreeNode';
export function isValidBST(root: TreeNode | null): boolean {
  return dfs(root, -Infinity, Infinity);
}
function dfs(root: TreeNode | null, min: number, max: number): boolean {
  if (root !== null) {
    if (root.val <= min || root.val >= max) {
      return false;
    }
    if (root.left) {
      if (!dfs(root.left, min, root.val)) {
        return false;
      }
    }
    if (root.right) {
      if (!dfs(root.right, root.val, max)) {
        return false;
      }
    }
    return true;
  } else {
    return true;
  }
}
