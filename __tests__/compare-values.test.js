const compareValues = require("../src/compare-values");

describe("compareValues", () => {
  test("loose equality coerces types", () => {
    expect(compareValues("5", 5, "loose")).toBe(true);
  });

  test("strict equality does not coerce types", () => {
    expect(compareValues("5", 5, "strict")).toBe(false);
  });

  test("loose equality treats null and undefined as equal", () => {
    expect(compareValues(null, undefined, "loose")).toBe(true);
  });

  test("strict equality treats null and undefined as different", () => {
    expect(compareValues(null, undefined, "strict")).toBe(false);
  });

  test("strict equality on identical primitive values", () => {
    expect(compareValues(10, 10, "strict")).toBe(true);
  });
});