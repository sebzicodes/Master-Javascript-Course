module.exports = function applyTwice(fn, input) {
    const first = fn(input);
    const second = fn(first);
    return second;
}