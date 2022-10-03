import { describe, it, expect } from 'vitest';
import { TreeNode } from '../../common/TreeNode';
import { flatten } from '../../Tree/114. Flatten Binary Tree to Linked List';
describe('', () => {
  it('give an empty tree', () => {
    expect(flatten(null)).toBe(null);
  });
  it('give a binary tree', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(5, null, new TreeNode(6))
    );
    const res = new TreeNode(
      1,
      null,
      new TreeNode(
        2,
        null,
        new TreeNode(
          3,
          null,
          new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
        )
      )
    );
    expect(flatten(root)).toEqual(res);
  });
  it('give a one tree', () => {
    expect(flatten(new TreeNode(1))).toEqual(new TreeNode(1));
  });
});
