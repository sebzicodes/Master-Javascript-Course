const getType = require('../src/get-type');

test('return typeof for empty array', () => {
    expect(getType([])).toBe('array');
});
test('return typeof for populated array', () => {
    expect(getType([1, 2, 3])).toBe('array');
});
test('return typeof for populated string', () => {
    expect(getType("Gabriel")).toBe('string');
});
test('return typeof for number', () => {
    expect(getType(4)).toBe('number');
});
test('return typeof for a boolean', () => {
    expect(getType(true)).toBe('boolean');
});
test('return typeof for BigInt', () => {
    expect(getType(10000000n)).toBe('bigint');
});
test('return typeof for undefined', () => {
    expect(getType()).toBe('undefined');
});
test('return typeof for Null', () => {
    expect(getType(null)).toBe('null');
});
test('get typeof for populated object', () => {
    expect(getType({'gabe':30})).toBe('object');
});