import { generateTrees } from '../95. Unique Binary Search Trees II';
import { TreeNode } from '../common/TreeNode';
import { describe, it, expect } from 'vitest';
describe('95', () => {
  it('pass zero return null ', () => {
    expect(generateTrees(0)).toEqual([null]);
  });
  it('pass one return one tree', () => {
    const node = new TreeNode(1);
    expect(generateTrees(1)).toEqual([node]);
  });
  it('pass 3 return the first element equal to res', () => {
    const res = new TreeNode(
      1,
      null,
      new TreeNode(2, null, new TreeNode(3, null, null))
    );
    expect(generateTrees(3)[0]).toEqual(res);
  });
});
