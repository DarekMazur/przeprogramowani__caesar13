import Header from './src/components/Header/Header'
import MainContent from './src/components/MainContent/MainContent'
import Footer from './src/components/Footer/Footer'
import Encrypt from './src/components/Encrypt/Encrypt';
import './src/styles/styles.css';

const app = document.querySelector('body');

const promise = new Promise(resolve => {
    resolve(
        app.innerHTML = `
        ${Header}
        ${MainContent}
        ${Footer}
    `)
});
  
promise
    .then(result => {
        const input = document.querySelector('.stringToEncrypt');
        const encryptValue = document.querySelector('.encryptionValue');
        const encryptedContent = document.querySelector('.encrypted');
        const sendButton = document.querySelector('.sendButton');
        const resetButton = document.querySelector('.resetButton');

        const encryptContent = () => {
            encryptedContent.classList.remove('isError');
            encryptedContent.innerHTML = Encrypt(input.value, parseInt(encryptValue.value))
            if (encryptedContent.innerHTML === 'Sorry, your message must be a text' || encryptedContent.innerHTML === `Sorry, your message can't be empty` || encryptedContent.innerHTML === `Sorry, encryption value should be positive`) {
                encryptedContent.classList.add('isError');
            }
        };

        const resetForm = () => {
            encryptedContent.classList.remove('isError');
            input.value = '';
            encryptValue.value = '';
            encryptedContent.innerHTML = '';
        }

        sendButton.onclick = encryptContent;
        resetButton.onclick = resetForm;
    }
)
