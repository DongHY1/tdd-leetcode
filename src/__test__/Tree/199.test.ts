import { describe, it, expect } from 'vitest';
import { TreeNode } from '../../common';
import { rightSideView, rightSideView2 } from '../../Tree/199. Binary Tree Right Side View';
describe('', () => {
  it('give a empty ', () => {
    expect(rightSideView(null)).toEqual([]);
  });
  it('give a tree', () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(5)),
      new TreeNode(3, null, new TreeNode(4))
    );
    expect(rightSideView(tree)).toEqual([1, 3, 4]);
    expect(rightSideView2(tree)).toEqual([1, 3, 4]);
  });
  it('give another tree', () => {
    const tree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), null),
      new TreeNode(3)
    );
    expect(rightSideView(tree)).toEqual([1, 3, 4]);
    expect(rightSideView2(tree)).toEqual([1, 3, 4]);
  });
});
