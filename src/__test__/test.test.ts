import { describe, it, expect } from 'vitest';
import { foo } from '../test';
describe('happy path', () => {
  it('return a+b', () => {
    expect(foo(1, 2)).toEqual(3);
  });
});
