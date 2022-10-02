import { describe, it, expect } from 'vitest';
import { TreeNode, ListNode } from '../../common';
import { sortedListToBST } from '../../Tree/109. Convert Sorted List to Binary Search Tree';
describe('', () => {
  it('give a empty input', () => {
    expect(sortedListToBST(null)).toEqual(null);
  });
});
