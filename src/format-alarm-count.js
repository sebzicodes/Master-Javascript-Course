module.exports = function formatAlarmCount(count) {
    if (count == null) {
        return "No data received";
    };
    if (count === 1) {
        return count + " active alarm";
    } else {
        return count + " active alarms";
    };
};