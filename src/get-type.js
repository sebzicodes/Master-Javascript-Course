module.exports = function getType(input) {
    if (Array.isArray(input)) {
        return('array');
    }
    if (input === null) {
        return("null");
    }
    return (typeof(input));
}