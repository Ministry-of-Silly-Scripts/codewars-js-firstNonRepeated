const { firstNonRepeated, getCharFrequency } = require('./firstNonRepeated');

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

  it('should return "e" for input "test"', () => {
    expect(firstNonRepeated('test')).toBe('e');
  });

  it('should return "r" for input "teeter"', () => {
    expect(firstNonRepeated('teeter')).toBe('r');
  });

  it('should return "t" for input "trend"', () => {
    expect(firstNonRepeated('trend')).toBe('t');
  });
});

describe('getCharFrequency', () => {
  it('should return {t: 2, e: 3, r: 1} for input "teeter"', () => {
    expect(getCharFrequency('teeter')).toEqual({ t: 2, e: 3, r: 1 });
  });

  it('should return {a: 2, b: 2, c: 2} for input "abccba"', () => {
    expect(getCharFrequency('abccba')).toEqual({ a: 2, b: 2, c: 2 });
  });
});
