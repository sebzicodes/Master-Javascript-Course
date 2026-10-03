module.exports = function compareValues(a, b, mode) {
    if(mode === "loose") {
        const looseComp = a == b;
        return looseComp;
    }
    if(mode === "strict") {
        const strictComp = a === b;
        return strictComp;
    }
    if(mode !== "strict" && mode !== "loose")
        return "mode input error";
}