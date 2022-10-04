import { describe, it, expect } from 'vitest';
import { Node } from '../../common';
import { connect } from '../../Tree/117. Populating Next Right Pointers in Each Node II';
describe('', () => {
  it('return null', () => {
    expect(connect(null)).toBe(null);
  });
  it('give a tree', () => {
    const node = new Node(1, new Node(2), new Node(3));
    const res = new Node(
      1,
      new Node(2, null, null, new Node(3)),
      new Node(3, null, null, null)
    );
    expect(connect(node)).toEqual(res);
  });
});
