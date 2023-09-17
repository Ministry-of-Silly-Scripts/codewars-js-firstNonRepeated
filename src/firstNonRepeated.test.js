const firstNonRepeated= require('./firstNonRepeated');

describe('the firstNonRepeated kata canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('firstNonRepeated', () => {
  it('should return null for empty string input', () => {
    expect(firstNonRepeated('')).toBeNull();
  });

  it('should return "a" for input "a"', () => {
    expect(firstNonRepeated('a')).toBe('a');
  });
});
