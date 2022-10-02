import { describe, it, expect } from 'vitest';
import { TreeNode } from '../../common';
import { sortedArrayToBST } from '../../Tree/108. Convert Sorted Array to Binary Search Tree';
describe('', () => {
  it('give a null', () => {
    expect(sortedArrayToBST([])).toEqual(null);
  });
  it('give a short array', () => {
    const res = new TreeNode(1, null, new TreeNode(3, null, null));
    expect(sortedArrayToBST([1, 3])).toEqual(res);
  });
  it('give a long array', () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual(
      new TreeNode(
        0,
        new TreeNode(-10, null, new TreeNode(-3, null, null)),
        new TreeNode(5, null, new TreeNode(9, null, null))
      )
    );
  });
});
