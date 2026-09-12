const checkContents = require("../src/check-contents");

describe("checkContents", () => {
    test("returns 'absent' for null", () => {
        expect(checkContents(null)).toBe("absent");
    });

    test("returns 'absent' for undefined", () => {
        expect(checkContents(undefined)).toBe("absent");
    });

    test("returns 'empty' for an empty string", () => {
        expect(checkContents("")).toBe("empty");
    });

    test("returns 'empty' for an empty array", () => {
        expect(checkContents([])).toBe("empty");
    });

    test("returns 'empty' for an empty object", () => {
        expect(checkContents({})).toBe("empty");
    });

    test("returns 'has contents' for a non-empty string", () => {
        expect(checkContents("hello")).toBe("has contents");
    });

    test("returns 'has contents' for a string containing only a space", () => {
        expect(checkContents(" ")).toBe("has contents");
    });

    test("returns 'has contents' for a populated array", () => {
        expect(checkContents([1, 2, 3])).toBe("has contents");
    });

    test("returns 'has contents' for an array containing null", () => {
        expect(checkContents([null])).toBe("has contents");
    });

    test("returns 'has contents' for a populated object", () => {
        expect(checkContents({ a: 1 })).toBe("has contents");
    });

    test("returns 'has contents' for a positive number", () => {
        expect(checkContents(42)).toBe("has contents");
    });

    test("returns 'has contents' for zero", () => {
        expect(checkContents(0)).toBe("has contents");
    });

    test("returns 'has contents' for true", () => {
        expect(checkContents(true)).toBe("has contents");
    });

    test("returns 'has contents' for false", () => {
        expect(checkContents(false)).toBe("has contents");
    });

    test("returns 'has contents' for a function", () => {
        expect(checkContents(function () {})).toBe("has contents");
    });
});