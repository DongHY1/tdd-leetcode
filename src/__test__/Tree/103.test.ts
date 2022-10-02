import { describe, it, expect } from 'vitest';
import { TreeNode } from '../../common/TreeNode';
import { zigzagLevelOrder } from '../../Tree/103. Binary Tree Zigzag Level Order Traversal';
describe('', () => {
  it('null', () => {
    expect(zigzagLevelOrder(null)).toEqual([]);
  });
  it('one element', () => {
    const root = new TreeNode(5, null, null);
    expect(zigzagLevelOrder(root)).toEqual([[5]]);
  });
  it('one level', () => {
    const root = new TreeNode(
      5,
      new TreeNode(1, null, null),
      new TreeNode(6, null, null)
    );
    expect(zigzagLevelOrder(root)).toEqual([[5], [6, 1]]);
  });
  it('two level', () => {
    const root = new TreeNode(
      3,
      new TreeNode(9, null, null),
      new TreeNode(
        20,
        new TreeNode(15, null, null),
        new TreeNode(7, null, null)
      )
    );
    expect(zigzagLevelOrder(root)).toEqual([[3], [20, 9], [15, 7]]);
  });
  it('two level ', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
      new TreeNode(3, null, null)
    );
    expect(zigzagLevelOrder(root)).toEqual([[1], [3, 2], [4, 5]]);
  });
});
