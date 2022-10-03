import { describe, it, expect } from 'vitest';
import { TreeNode } from '../../common/TreeNode';
import { pathSum } from '../../Tree/113. Path Sum II';
describe('', () => {
  it('empty tree', () => {
    expect(pathSum(null, 0)).toEqual([]);
  });
  it('give a small tree', () => {
    const node = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(pathSum(node, 3)).toEqual([[1, 2]]);
    expect(pathSum(node, 4)).toEqual([[1, 3]]);
    expect(pathSum(node, 5)).toEqual([]);
  });
  it('give a big tree', () => {
    const node = new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
      new TreeNode(
        8,
        new TreeNode(13),
        new TreeNode(4, new TreeNode(5), new TreeNode(1))
      )
    );
    expect(pathSum(node, 22)).toEqual([
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ]);
  });
});
