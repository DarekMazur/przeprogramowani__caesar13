import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import Encrypt from './components/Encrypt/Encrypt';
import './styles/styles.min.css';

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
        const encryptedContent = document.querySelector('.encrypted');
        const sendButton = document.querySelector('.sendButton');
        const resetButton = document.querySelector('.resetButton');

        const encryptContent = () => {
            encryptedContent.classList.remove('isError');
            encryptedContent.innerHTML = Encrypt(input.value)
            if (encryptedContent.innerHTML === 'Sorry, your message must be a text' || encryptedContent.innerHTML === `Sorry, your message can't be empty`) {
                encryptedContent.classList.add('isError');
            }
        };

        const resetForm = () => {
            encryptedContent.classList.remove('isError');
            input.value = '';
            encryptedContent.innerHTML = '';
        }

        sendButton.onclick = encryptContent;
        resetButton.onclick = resetForm;
    }
)
