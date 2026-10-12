const formatAlarmCount = require("../src/format-alarm-count");
describe("formatAlarmCount", () => {
    test("reports missing data when count is undefined", () => {
        expect(formatAlarmCount(undefined)).toBe("No data received");
    });
    test("treats 0 as real data, not missing data", () => {
        expect(formatAlarmCount(0)).toBe("0 active alarms");
    });
    test("uses singular 'alarm' for exactly 1", () => {
        expect(formatAlarmCount(1)).toBe("1 active alarm");
    });
    test("uses plural 'alarms' for more than 1", () => {
        expect(formatAlarmCount(5)).toBe("5 active alarms");
    });
});