import { polishToUniversalLetter } from "../src/utils/polishToUniversalLetter";

test("Input polish letter", () => {
  expect(polishToUniversalLetter("ą")).toBe("a");
});

test("Input universal letter", () => {
  expect(polishToUniversalLetter("Z")).toBe("Z");
});

test("Input unmber", () => {
  expect(polishToUniversalLetter("1")).toBe("1");
});

test("Input symbol", () => {
  expect(polishToUniversalLetter("?")).toBe("?");
});
