import { allLetters } from "../../utils/allLettersArray";
import { constants } from "../../utils/constants";

const ROT13 = (plainText, value) => {
  console.log(`input: ${plainText}, value: ${value}`)
  const encryption = [];

  plainText.forEach((letter) => {
    console.log( `letter: ${letter}`)
    if (allLetters.some((el) => letter.toLowerCase() === el)) {
      const letterPosition = allLetters.indexOf(letter.toLowerCase());
      console.log(`letter positon: ${letterPosition}`)
      console.log(`new positon: ${letterPosition + (value && value !== '' ? value : constants.encryption)}`)
      letter === letter.toUpperCase()
        ? (
          console.log(`encrypted: ${allLetters[
            (letterPosition + (value && value !== '' ? value : constants.encryption)) % allLetters.length
          ].toUpperCase()}`),
          encryption.push(
            allLetters[
              (letterPosition + (value && value !== '' ? value : constants.encryption)) % allLetters.length
            ].toUpperCase()
          ))
        : (
          console.log(allLetters[
            (letterPosition + (value && value !== '' ? value : constants.encryption)) % allLetters.length
          ].toUpperCase()),
          encryption.push(
            allLetters[
              (letterPosition + (value && value > 0 && value !== '' ? value : constants.encryption)) % allLetters.length
            ]
          ));
    } else {
      encryption.push(letter);
    }
  });

  return encryption.join("");
};

export default ROT13;
