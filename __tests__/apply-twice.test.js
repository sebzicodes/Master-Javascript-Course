const applyTwice = require("../src/apply-twice");
describe("applyTwice", () => {
    test("doubles a number twice", () => {
        expect(applyTwice((n) => n * 2, 3)).toBe(12);
    });
    test("adds an exclamation mark twice", () => {
        expect(applyTwice((s) => s + "!", "hi")).toBe("hi!!");
    });
    test("works with a declared function", () => {
        function addTen(n) {
            return n + 10;
        }
        expect(applyTwice(addTen, 0)).toBe(20);
    });
});