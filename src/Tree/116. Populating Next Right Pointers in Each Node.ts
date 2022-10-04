import { Node } from '../common';
export function connect(root: Node | null): Node | null {
  //DFS
  if (root == null || root.left == null) return root;
  root.left.next = root.right;
  root.right!.next = root.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);
  return root;
}
export function connect_1(root: Node | null): Node | null {
  if (!root) return null;
  let queue: Array<Node | null> = [root];
  while (queue.length) {
    const len: number = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      i !== len - 1 ? (node!.next = queue[0]) : null;
      if (node!.left) {
        queue.push(node!.left);
      }
      if (node!.right) {
        queue.push(node!.right);
      }
    }
  }
  return root;
}
