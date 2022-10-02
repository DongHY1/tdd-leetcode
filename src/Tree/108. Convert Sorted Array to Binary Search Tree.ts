import { TreeNode } from '../common';
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const helper = (nums: number[], l: number, r: number): TreeNode | null => {
    if (l > r) return null;
    let mid = Math.floor((l + r) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = helper(nums, l, mid - 1);
    root.right = helper(nums, mid + 1, r);
    return root;
  };
  return helper(nums, 0, nums.length - 1);
}
