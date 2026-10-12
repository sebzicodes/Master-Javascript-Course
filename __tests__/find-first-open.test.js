const findFirstOpen = require("../src/find-first-open");
describe("findFirstOpen", () => {
    test("returns the name of the first open door", () => {
        const doors = [
            { name: "Lobby", open: false },
            { name: "Dock", open: true },
            { name: "Server Room", open: true },
        ];
        expect(findFirstOpen(doors)).toBe("Dock");
    });
    test("finds an open door at the very start of the list", () => {
        const doors = [
            { name: "Lobby", open: true },
            { name: "Dock", open: false },
        ];
        expect(findFirstOpen(doors)).toBe("Lobby");
    });
    test("finds an open door at the very end of the list", () => {
        const doors = [
            { name: "Lobby", open: false },
            { name: "Dock", open: false },
            { name: "Server Room", open: true },
        ];
        expect(findFirstOpen(doors)).toBe("Server Room");
    });
    test("returns null when every door is secure", () => {
        const doors = [
            { name: "Lobby", open: false },
            { name: "Dock", open: false },
        ];
        expect(findFirstOpen(doors)).toBe(null);
    });
    test("returns null for an empty list", () => {
        expect(findFirstOpen([])).toBe(null);
    });
});