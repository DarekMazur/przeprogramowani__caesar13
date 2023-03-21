import Encrypt from "../src/components/Encrypt/Encrypt";

describe('Encrypt', () => {
  test('input as number should throw error message', () => {
    expect(Encrypt(123)).toBe("Sorry, your message must be a text");
  });
  test('empty input should throw error message', () => {
    expect(Encrypt("PRZEPROGRAMOWANI")).toBe("CEMRCEBTENZBJNAV");
  });
  test('input string should be encrypted', () => {
    expect(Encrypt("")).toBe("Sorry, your message can't be empty");
  });
});
