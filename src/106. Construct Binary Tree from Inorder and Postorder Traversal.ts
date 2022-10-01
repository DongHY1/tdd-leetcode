// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
import { TreeNode } from './common/TreeNode';
interface IMap {
  [key: number]: number;
}
export function buildTree(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  let map: IMap = {};
  for (let i = 0; i < inorder.length; i++) map[inorder[i]] = i;
  let recur = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;
    // 后续遍历的最后一位是根节点
    const value = postorder.pop()!;
    let root = new TreeNode(value);
    root.right = recur(map[value] + 1, end);
    root.left = recur(start, map[value] - 1);
    return root;
  };
  return recur(0, inorder.length - 1);
}
