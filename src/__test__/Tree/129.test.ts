import { describe, it, expect } from 'vitest';
import { TreeNode } from '../../common';
import { sumNumbers } from '../../Tree/129. Sum Root to Leaf Numbers';
describe('', () => {
  it('give null ', () => {
    expect(sumNumbers(null)).toBe(0);
  });
  it('give no child tree', () => {
    const node = new TreeNode(1);
    const node2 = new TreeNode(2);
    expect(sumNumbers(node)).toBe(node.val);
    expect(sumNumbers(node2)).toBe(node2.val);
  });
  it('give a child tree', () => {
    const node = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(sumNumbers(node)).toBe(25);
  });
});
