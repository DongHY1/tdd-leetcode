import { describe, it, expect } from 'vitest';
import { TreeNode } from '../common/TreeNode';
import { isValidBST } from '../98. Validate Binary Search Tree';
describe('', () => {
  it('null', () => {
    expect(isValidBST(null)).toEqual(true);
  });
  it('give a empty node', () => {
    const node = new TreeNode(1, null, null);
    expect(isValidBST(node)).toEqual(true);
  });
  it('give a BST Tree', () => {
    const node = new TreeNode(
      5,
      new TreeNode(1, null, null),
      new TreeNode(6, null, null)
    );
    expect(isValidBST(node)).toEqual(true);
  });

  it('give a not BST Tree', () => {
    const node = new TreeNode(
      5,
      new TreeNode(6, null, null),
      new TreeNode(1, null, null)
    );
    expect(isValidBST(node)).toEqual(false);
  });
  it('give a equal BST Tree', () => {
    const node = new TreeNode(
      5,
      new TreeNode(5, null, null),
      new TreeNode(5, null, null)
    );
    expect(isValidBST(node)).toEqual(false);
  });
});
