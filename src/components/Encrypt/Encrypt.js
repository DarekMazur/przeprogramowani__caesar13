import ROT13 from '../ROT13/ROT13'
import { polishToUniversalLetter } from '../../utils/functions'

const Encrypt = (input) => {

    const plainTextArray = input.split('');

    const plainTextUniversalChars = [];

    plainTextArray.forEach(letter => {
        plainTextUniversalChars.push(polishToUniversalLetter(letter));
    });

    return(
        ROT13(plainTextUniversalChars)
    )
}

export default Encrypt
