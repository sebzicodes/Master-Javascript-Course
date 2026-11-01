const makeBadge = require("../src/make-badge");
describe("makeBadge", () => {
    test("creates a badge with name and level", () => {
        expect(makeBadge("Sebzi", 3)).toEqual({ name: "Sebzi", level: 3 });
    });
    test("defaults level to 1", () => {
        expect(makeBadge("Sebzi")).toEqual({ name: "Sebzi", level: 1 });
    });
});