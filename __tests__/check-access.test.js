const checkAccess = require("../src/check-access");
describe("checkAccess", () => {
    test("grants valid badge at normal door", () => {
        expect(checkAccess({valid: true, revoked: false}, {lockdown: false})).toBe("GRANT");
    });
    test("denies and invalid badge", () => {
        expect(checkAccess({valid: false, revoked: false}, {lockdown: false})).toBe("DENY");
    });
    test("denies revoked badge even if its otherwise valid", () => {
        expect(checkAccess({valid: true, revoked: true}, {lockdown: false})).toBe("DENY");
    });
    test("denies a valid badge when the door is in lockdown", () => {
        expect(checkAccess({valid: true, revoked: false}, {lockdown: true})).toBe("DENY");
    });
    test("denies when badge is revoked AND door is in lockdown", () => {
        expect(checkAccess({valid: true, revoked: true}, {lockdown: true})).toBe("DENY");
    });
});