import Eliot from "../src/components/Eliot/Eliot";

test("Eliot input string", () => {
  expect(Eliot("Encrypt your message")).toBe("3nCrYpT Y0Ur m3554G3");
});

test("Eliot imput empty string", () => {
  expect(Eliot("")).toBe("");
});
