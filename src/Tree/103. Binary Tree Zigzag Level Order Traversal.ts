import { TreeNode } from '../common/TreeNode';
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  let flag = true;
  if (root === null) return res;
  let queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length) {
    let level: number[] = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      let node: TreeNode = queue.shift()!;
      if (flag) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(level);
    flag = !flag;
  }
  return res;
}
