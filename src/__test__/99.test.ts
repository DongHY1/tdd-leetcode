import { describe, it, expect } from 'vitest';
import { recoverTree } from '../99. Recover Binary Search Tree';
import { TreeNode } from '../common/TreeNode';
describe('', () => {
  it('', () => {
    expect(1).toBe(1);
  });
  it('give a bad tree', () => {
    const node = new TreeNode(
      5,
      new TreeNode(6, null, null),
      new TreeNode(1, null, null)
    );
    const trueNode = new TreeNode(
      5,
      new TreeNode(1, null, null),
      new TreeNode(6, null, null)
    );
    expect(recoverTree(node)).toStrictEqual(trueNode);
  });
});
