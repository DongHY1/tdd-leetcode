import { TreeNode } from '../common/TreeNode';
export function levelOrderBottom(root: TreeNode | null): number[][] {
  // binary tree bfs
  let res: number[][] = [];
  if (root === null) return res;
  let queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    let level: number[] = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node!.val);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
    res.unshift(level);
  }
  return res;
}
