import Eliot from "../src/components/Eliot/Eliot";

describe('Eliot', () =>{
  test('should convert string', () => {
    expect(Eliot("Encrypt your message")).toBe("3nCrYpT Y0Ur m3554G3");
  });
})