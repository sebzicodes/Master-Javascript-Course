const countActive = require("../src/count-active");
describe("countActive", () => {
    test("counts only alarms with status 'active", () => {
        const alarms = [
            {id: 1, status: "active"},
            {id: 2, status: "cleared"},
            {id: 3, status: "active"}

        ];
        expect(countActive(alarms)).toBe(2);
    });

    test("returns 0 when no alarms are active", () => {
        const alarms = [
            {id: 1, status: "cleared"},
            {id: 2, status: "acknowledged"}
        ];
        expect(countActive(alarms)).toBe(0);
    });

    test("returns zero for an empty list", () => {
        expect(countActive([])).toBe(0);
    });

    test("counts every alarm when all are active", () => {
        const alarms = [
            {id: 1, status: "active"},
            {id: 2, status: "active"},
            {id: 3, status: "active"},
            {id: 3, status: "active"}

        ];
        expect(countActive(alarms)).toBe(4);
    });

});