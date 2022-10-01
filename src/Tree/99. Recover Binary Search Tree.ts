import { TreeNode } from './common/TreeNode';
type Node = TreeNode | null;
export function recoverTree(root: Node): Node {
  // Resetting values for subsequent executions
  let prev: Node = null,
    first: Node = null,
    second: Node = null;
  function inOrder(root: Node) {
    if (!root) return;
    inOrder(root.left);
    if (prev == null) {
      prev = root;
    } else {
      if (prev.val > root.val) {
        // y取小值
        second = root;
        if (first == null) {
          // x取大值
          first = prev;
        }
      }
      prev = root;
    }
    prev = root;
    inOrder(root.right);
  }

  inOrder(root);
  // use ! to avoid ts warn
  // https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
  let temp: number = first!.val;
  first!.val = second!.val;
  second!.val = temp;
  return root;
}
