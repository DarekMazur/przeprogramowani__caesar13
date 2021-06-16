import ROT13 from '../ROT13/ROT13'
import { polishToUniversalLetter } from '../../utils/functions'

const Encrypt = (input) => {

    if (typeof input !== 'string' || !isNaN(Number(input))) {
        try {
            throw new Error('Sorry, your message must be a text');
        } catch (e) {
            return e.message;
        }
    } else if (input === '' || input === ' ') {
        try {
            throw new Error(`Sorry, your message can't be empty`);
        } catch (e) {
            return e.message;
        }
    }

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
