import allLetters from '../../utils/allLettersArray'
import variables from '../../utils/variables'

const ROT13 = (plainText) => {

    const encryption = [];

    plainText.forEach(letter => {
        if (allLetters.some((el) => letter.toLowerCase() === el )) {
            const letterPosition = allLetters.indexOf(letter.toLowerCase());
            letter === letter.toUpperCase() ? (
                encryption.push(allLetters[(letterPosition + variables.encryption) % (allLetters.length)].toUpperCase())
            ) : (
                encryption.push(allLetters[(letterPosition + variables.encryption) % (allLetters.length)])
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