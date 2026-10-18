const formatZone = require("./format-zone.test");
describe("formatZone", () => {
    test("formats a number zone", () => {
        expect(formatZone(4)).toBe("Zone 4");
    });
    test("formats a string zone", () => {
        expect(formatZone("B2")).toBe("Zone B2");
    });
    test("uses 'unknown' when no zone is given", () => {
        expect(formatZone()).toBe("Zone unknown");
    });
});