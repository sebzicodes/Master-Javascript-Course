const getAlarmPriority = require("../src/get-alarm-priority");
describe("getAlarmPriority", () => {
    test("fire is HIGH", () => {
        expect(getAlarmPriority("fire")).toBe("HIGH");
    });
    test("door forced is HIGH", () => {
        expect(getAlarmPriority("door forced")).toBe("HIGH");
    });
    test("door held is MEDIUM", () => {
        expect(getAlarmPriority("door held")).toBe("MEDIUM");
    });
    test("anything else is LOW", () => {
        expect(getAlarmPriority("low battery")).toBe("LOW");
    });
});