import Encrypt from "../src/components/Encrypt/Encrypt";

test("Encrypt input number", () => {
  expect(Encrypt(123)).toBe("Sorry, your message must be a text");
});

test("Encrypt input string", () => {
  expect(Encrypt("PRZEPROGRAMOWANI")).toBe("CEMRCEBTENZBJNAV");
});

test("Encrypt input empty string", () => {
  expect(Encrypt("")).toBe("Sorry, your message can't be empty");
});
