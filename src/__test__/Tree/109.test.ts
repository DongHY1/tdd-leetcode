import { describe, it, expect } from 'vitest';
import { TreeNode, ListNode } from '../../common';
import {
  sortedListToBST,
  sortedListToBST_1,
} from '../../Tree/109. Convert Sorted List to Binary Search Tree';
describe('', () => {
  it('give a empty input', () => {
    expect(sortedListToBST(null)).toEqual(null);
    expect(sortedListToBST_1(null)).toEqual(null);
  });
  it('give a node input', () => {
    const node = new ListNode(
      -10,
      new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9))))
    );
    expect(sortedListToBST(node)).toEqual(
      new TreeNode(
        0,
        new TreeNode(-10, null, new TreeNode(-3, null, null)),
        new TreeNode(5, null, new TreeNode(9, null, null))
      )
    );
    expect(sortedListToBST_1(node)).toEqual(
      new TreeNode(
        0,
        new TreeNode(-3,new TreeNode(-10, null, null),null),
        new TreeNode(9,new TreeNode(5, null, null),null)
      )
    );
  });
});
