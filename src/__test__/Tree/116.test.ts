import { describe, it, expect } from 'vitest';
import { Node } from '../../common';
import {
  connect,
  connect_1,
} from '../../Tree/116. Populating Next Right Pointers in Each Node';
describe('', () => {
  it('empty', () => {
    expect(connect(null)).toBe(null);
  });
  it('populate each next pointer to point to its next right node', () => {
    const node = new Node(1, new Node(2), new Node(3));
    const res = new Node(
      1,
      new Node(2, null, null, new Node(3)),
      new Node(3, null, null, null)
    );
    expect(connect(node)).toEqual(res);
    expect(connect_1(node)).toEqual(res);
  });
});
