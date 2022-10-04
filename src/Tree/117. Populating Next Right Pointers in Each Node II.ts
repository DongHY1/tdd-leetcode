import { Node } from '../common';
export function connect(root: Node | null): Node | null {
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
