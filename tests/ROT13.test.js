import ROT13 from "../src/components/ROT13/ROT13";

const inputArray = ["P","R","Z","E","P","R","O","G","R","A","M","O","W","A","N","I"]

describe('ROT', () => {
  test("should convert array to string and encryp", () => {
    expect(
      ROT13(inputArray)
    ).toBe("CEMRCEBTENZBJNAV");
  });
});
