module.exports = function checkContents(input) {
     if(input == null) {
        return "absent";
    }
    if(input === "") {
        return "empty";
    }
    if(Array.isArray(input) && input.length === 0) {
        return "empty";
    }
    if(typeof input === "object" &&
        input !== null &&
        !Array.isArray(input) &&
        Object.keys(input).length === 0) {
        return "empty";
    }
    return("has contents");
};

/*
--More proper syntax of function--
module.exports = function checkContents(input) {
    if (input == null) return "absent";
    if (typeof input === "string" && input.length === 0) return "empty";
    if (Array.isArray(input) && input.length === 0) return "empty";
    if (typeof input === "object" && Object.keys(input).length === 0) return "empty";
    return "has contents";
};
/*