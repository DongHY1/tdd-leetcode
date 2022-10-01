import { describe, it, expect } from 'vitest';
import { TreeNode } from '../common/TreeNode';
import { levelOrder } from '../102. Binary Tree Level Order Traversal';
describe('', () => {
  it('null', () => {
    expect(levelOrder(null)).toEqual([]);
  });
  it('one level', () => {
    const root = new TreeNode(
      5,
      new TreeNode(1, null, null),
      new TreeNode(6, null, null)
    );
    expect(levelOrder(root)).toEqual([[5], [1, 6]]);
  });
  it('two level', () => {
    const root = new TreeNode(
      5,
      new TreeNode(1, null, null),
      new TreeNode(6, new TreeNode(3, null, null), new TreeNode(7, null, null))
    );
    expect(levelOrder(root)).toEqual([[5], [1, 6], [3, 7]]);
  });
});
