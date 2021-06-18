import allLetters from '../../utils/allLettersArray'
import constants from '../../utils/constants'

const ROT13 = (plainText) => {

    const encryption = [];

    plainText.forEach(letter => {
        if (allLetters.some((el) => letter.toLowerCase() === el )) {
            const letterPosition = allLetters.indexOf(letter.toLowerCase());
            letter === letter.toUpperCase() ? (
                encryption.push(allLetters[(letterPosition + constants.encryption) % (allLetters.length)].toUpperCase())
            ) : (
                encryption.push(allLetters[(letterPosition + constants.encryption) % (allLetters.length)])
            )
        } else {
            encryption.push(letter)
        }
    }) 

    return(
        encryption.join('')
    );
}

export default ROT13