import { generateTrees } from '../95. Unique Binary Search Trees II';
import { TreeNode } from '../common/TreeNode';
import { describe, it, expect } from 'vitest';
describe('tree', () => {
  it('pass zero ', () => {
    expect(generateTrees(0)).toEqual([null]);
  });
});
