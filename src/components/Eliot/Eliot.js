const Eliot = (message) => {
    const messageArray = message.split('');
  
    function staticChanges(letter) {
      switch (letter.toLowerCase()) {
        case 'a':
          return '4';
        case 'i':
          return '1';
        case 'o':
          return '0';
        case 'e':
        return '3';
        case 's':
        return '5';
        default:
          return letter;
      }
    }
    
    let toLower = false;
  
    function convertLetterToEliot(letter, index) {
      if (staticChanges(letter) !== letter) {
        return staticChanges(letter);
      }
  
      function newLetter() {
        return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
      }
       
      return newLetter();
    }
  
    return messageArray.reduce((total, letter, letterIndex) => (
      total + convertLetterToEliot(letter, letterIndex)
    ),'');
  }

export default Eliot