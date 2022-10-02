import { TreeNode } from '../common/TreeNode';
export function generateTrees(n: number): Array<TreeNode | null> {
  const dfs = (start: number, end: number): Array<TreeNode | null> => {
    let res: Array<TreeNode | null> = [];
    if (start > end) return [null];
    for (let i = start; i <= end; i++) {
      const leftNode = dfs(start, i - 1);
      const rightNode = dfs(i + 1, end);
      for (const l of leftNode) {
        for (const r of rightNode) {
          const root = new TreeNode(i);
          root.left = l;
          root.right = r;
          res.push(root);
        }
      }
    }
    return res;
  };
  return dfs(1, n);
}
