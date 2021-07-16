import ROT13 from "../src/components/ROT13/ROT13";

test("ROT13 input string", () => {
  expect(
    ROT13([
      "P",
      "R",
      "Z",
      "E",
      "P",
      "R",
      "O",
      "G",
      "R",
      "A",
      "M",
      "O",
      "W",
      "A",
      "N",
      "I",
    ])
  ).toBe("CEMRCEBTENZBJNAV");
});
