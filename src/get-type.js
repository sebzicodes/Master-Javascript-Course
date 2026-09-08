module.exports = function getType(input) {
    if (Array.isArray(input)) {
        return('array');
    }
    return (typeof(input));
}