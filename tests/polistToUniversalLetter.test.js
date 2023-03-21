import { polishToUniversalLetter } from "../src/utils/polishToUniversalLetter";

describe('polishToUniversalLetter', () => {
  test("polish letter should be converted to universal alphabet", () => {
    expect(polishToUniversalLetter("ą")).toBe("a");
  });

  test("universal letter should not be changed", () => {
    expect(polishToUniversalLetter("Z")).toBe("Z");
  });

  test("number should not be changed", () => {
    expect(polishToUniversalLetter("1")).toBe("1");
  });

  test("symbol should not be changed", () => {
    expect(polishToUniversalLetter("?")).toBe("?");
  });
})


