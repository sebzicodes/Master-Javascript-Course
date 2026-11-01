module.exports = function getAlarmPriority(input) {
    if(input === "fire" || input === "door forced") {
        return "HIGH";
    }
    if(input === "door held") {
        return "MEDIUM";
    }
    return "LOW";
}