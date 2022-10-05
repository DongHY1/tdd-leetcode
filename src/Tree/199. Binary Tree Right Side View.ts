import { TreeNode } from '../common/TreeNode';

// dfs
export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];
  const res: number[] = [];
  const help = (root: TreeNode | null, h: number) => {
    if (!root) return;
    res[h] = root.val;
    help(root.left, h + 1);
    help(root.right, h + 1);
  };
  help(root, 0);
  return res;
}
// bfs
export function rightSideView2(root: TreeNode | null): number[] {
  if (!root) return [];
  const res: number[] = [root.val];
  let queue: TreeNode[] = [root];
  while (queue.length) {
    const next: TreeNode[] = [];
    for (let node of queue) {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    if (next.length) res.push(next[next.length - 1].val);
    queue = next;
  }
  return res;
}
