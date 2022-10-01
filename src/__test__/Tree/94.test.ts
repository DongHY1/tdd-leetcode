import {
  inorderTraversal,
  inorderTraversal_1,
} from '../../Tree/94.Binary_Tree_Inorder_Traversal';
import { TreeNode } from '../../common/TreeNode';
import { describe, it, expect } from 'vitest';
describe('94', () => {
  it('return root -> left -> right', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(3);
    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
    expect(inorderTraversal_1(root)).toEqual([1, 3, 2]);
  });
  it('return empty array', () => {
    expect(inorderTraversal(null)).toEqual([]);
    expect(inorderTraversal_1(null)).toEqual([]);
  });
  it('return itself', () => {
    const root = new TreeNode(1);
    expect(inorderTraversal(root)).toEqual([1]);
    expect(inorderTraversal_1(root)).toEqual([1]);
  });
});
