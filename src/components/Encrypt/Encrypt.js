import ROT13 from '../ROT13/ROT13'

const Encrypt = (input) => {

    const plainTextArray = input.split('');

    const plainTextUniversalChars = [];

    function polishToUniversalLetter(letter) {
        switch (letter) {
            case 'ą' :
                return 'a';
            case 'ć' :
                return 'c';
            case 'ę' :
                return 'e';
            case 'ł' :
                return 'l';
            case 'ń' :
                return 'n';
            case 'ó' : 
                return 'o';
            case 'ś' : 
                return 's';
            case 'ż' :
            case 'ź' :
                return 'z';
            case 'Ą' :
                return 'A';
            case 'Ć' :
                return 'C';
            case 'Ę' :
                return 'E';
            case 'Ł' :
                return 'L';
            case 'Ń' :
                return 'N';
            case 'Ó' : 
                return 'O';
            case 'Ś' : 
                return 'S';
            case 'Ż' :
            case 'Ź' :
                return 'Z';
            default : 
                return letter; 
        };
    };

    plainTextArray.forEach(letter => {
        plainTextUniversalChars.push(polishToUniversalLetter(letter));
    });

    return(
        ROT13(plainTextUniversalChars)
    )
}

export default Encrypt
