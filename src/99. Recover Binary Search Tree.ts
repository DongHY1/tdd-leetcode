import { TreeNode } from './common/TreeNode';
type Node = TreeNode | null;
let prev: Node = null,
  first: Node = null,
  second: Node = null;
export function recoverTree(root: Node): Node {
  // Resetting values for subsequent executions
  prev = null;
  first = null;
  second = null;

  inOrder(root);
  // use ! to avoid ts warn
  // https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined
  let temp: number = first!.val;
  first!.val = second!.val;
  second!.val = temp;
  return root;
}

function inOrder(root: Node) {
  if (!root) return;
  inOrder(root.left);
  if (prev !== null && prev.val > root.val) {
    if (first === null) first = prev;
    second = root;
  }
  prev = root;
  inOrder(root.right);
}
