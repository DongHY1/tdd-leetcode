import { describe, it, expect } from 'vitest';
import { TreeNode } from '../../common/';
import { BSTIterator } from '../../Tree/173. Binary Search Tree Iterator';
describe('', () => {
  it('give a tree', () => {
    const root = new TreeNode(
      7,
      new TreeNode(3),
      new TreeNode(15, new TreeNode(9), new TreeNode(20))
    );
    const three = new TreeNode(3);
    const nine = new TreeNode(9);
    const twenty = new TreeNode(20);
    const fifteen = new TreeNode(15, nine, twenty);
    const seven = new TreeNode(7, three, fifteen);
    const res = [twenty, fifteen, nine, seven, three];
    const tree = new BSTIterator(root);
    expect(tree.stack).toEqual(res);
    expect(tree.next()).toBe(3);
    expect(tree.hasNext()).toBe(true);
    expect(tree.next()).toBe(7);
    expect(tree.hasNext()).toBe(true);
    expect(tree.next()).toBe(9);
    expect(tree.hasNext()).toBe(true);
    expect(tree.next()).toBe(15);
    expect(tree.hasNext()).toBe(true);
    expect(tree.next()).toBe(20);
    expect(tree.hasNext()).toBe(false);
  });
  it('give a one tree', () => {
    const tree = new BSTIterator(null);
    expect(tree.hasNext()).toBe(false);
  });
});
