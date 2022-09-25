import { inorderTraversal } from '../94.Binary_Tree_Inorder_Traversal';
import { TreeNode } from '../common/TreeNode';
import { describe, it, expect } from 'vitest';
describe('', () => {
  it('return inorder tree node', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(3);
    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
  });
  it('return empty array',()=>{
    expect([]).toEqual([]);
  })
  it('return itself',()=>{
    const root = new TreeNode(1);
    expect(inorderTraversal(root)).toEqual([1])
  })
})
