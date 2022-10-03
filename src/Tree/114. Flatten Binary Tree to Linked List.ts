import { TreeNode } from '../common/TreeNode';
export function flatten(root: TreeNode | null): TreeNode | null {
  let prev: TreeNode | null = null;
  const traverse = (node: TreeNode | null) => {
    if (!node) {
      return;
    }

    traverse(node.right);
    traverse(node.left);

    // task
    node.left = null;
    node.right = prev;
    prev = node;
  };
  traverse(root);
  return root;
}
