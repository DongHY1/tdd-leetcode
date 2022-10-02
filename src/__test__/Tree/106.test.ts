import { describe, it, expect } from 'vitest';
import { TreeNode } from '../../common/TreeNode';
import { buildTree } from '../../Tree/106. Construct Binary Tree from Inorder and Postorder Traversal';
describe('106', () => {
  it('pass null', () => {
    expect(buildTree([], [])).toBe(null);
  });
  it('pass only one element', () => {
    expect(buildTree([1], [1])).toEqual(new TreeNode(1));
  });
  it('pass inorder and postoreder', () => {
    const res = new TreeNode(
      3,
      new TreeNode(9, null, null),
      new TreeNode(
        20,
        new TreeNode(15, null, null),
        new TreeNode(7, null, null)
      )
    );
    expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toEqual(res);
  });
});
