import ROT13 from "../ROT13/ROT13";
import { polishToUniversalLetter } from "../../utils/polishToUniversalLetter";

const Encrypt = (input, value) => {
  console.log(`input: ${input}, value: ${value}`)
  if (
    typeof input !== "string" ||
    (!isNaN(Number(input)) && input.length > 0)
  ) {
    try {
      throw new Error("Sorry, your message must be a text");
    } catch (e) {
      return e.message;
    }
  } else if (input.length === 0) {
    try {
      throw new Error(`Sorry, your message can't be empty`);
    } catch (e) {
      return e.message;
    }
  } else if (value < 0) {
    try {
      throw new Error(`Sorry, encryption value should be positive`);
    } catch (e) {
      return e.message;
    }
  }

  const plainTextArray = input.split("");

  const plainTextUniversalChars = [];

  plainTextArray.forEach((letter) => {
    plainTextUniversalChars.push(polishToUniversalLetter(letter));
  });

  return ROT13(plainTextUniversalChars, value);
};

export default Encrypt;
