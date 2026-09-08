const getType = require('../src/get-type');

test('return typeof for an empty array', () => {
    expect(getType([])).toBe('Object');
});
test('return typeof for array', () => {
    expect(getType([1, 2, 3])).toBe('Array');
});
test('return typeof for string', () => {
    expect(getType("Gabriel")).toBe('string');
});
test('return typeof for number', () => {
    expect(getType(4)).toBe('number');
});
test('return typeof for a boolean', () => {
    expect(getType(true)).toBe('boolean');
});
test('return typeof for BigInt', () => {
    expect(getType(10000000n)).toBe('BigInt');
});
test('return typeof for undefined', () => {
    expect(getType()).toBe('undefined');
});
test('return typeof for Null', () => {
    expect(getType(null)).toBe('Object');
});
test('get typeof for object', () => {
    expect(getType({'gabe':30})).toBe('Object');
});