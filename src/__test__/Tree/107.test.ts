import { describe, it, expect } from 'vitest';
import { TreeNode } from '../../common/TreeNode';
import { levelOrderBottom } from '../../Tree/107. Binary Tree Level Order Traversal II';
describe('', () => {
  it('give a empty root', () => {
    expect(levelOrderBottom(null)).toEqual([]);
  });
  it('give a root node return bfs reverse', () => {
    const root = new TreeNode(
      3,
      new TreeNode(9, null, null),
      new TreeNode(
        20,
        new TreeNode(15, null, null),
        new TreeNode(7, null, null)
      )
    );
    expect(levelOrderBottom(root)).toEqual([[15, 7], [9, 20], [3]]);
  });
});
