import { numTrees } from '../96. Unique Binary Search Tree';
import { describe, it, expect } from 'vitest';
describe('tree', () => {
  it('pass zero return zero', () => {
    expect(numTrees(0)).toEqual(0);
  });
  it('pass one return one', () => {
    expect(numTrees(1)).toEqual(1);
  });
  it('pass 3 return 5', () => {
    expect(numTrees(3)).toEqual(5);
  });
});
