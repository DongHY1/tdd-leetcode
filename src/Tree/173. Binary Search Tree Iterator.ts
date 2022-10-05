import { TreeNode } from '../common/TreeNode';
export class BSTIterator {
  stack: TreeNode[];
  constructor(root: TreeNode | null) {
    this.stack = [];
    if (root) this.bfs(root);
  }
  bfs(root: TreeNode) {
    if (root.right) {
      this.bfs(root.right);
    }
    this.stack.push(root);
    if (root.left) {
      this.bfs(root.left);
    }
  }
  next(): number {
    return this.stack.pop()!.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
