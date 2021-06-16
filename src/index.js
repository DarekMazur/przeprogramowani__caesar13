import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Encrypt from './components/Encrypt/Encrypt';
import './styles/styles.css';

const app = document.querySelector('body');

const promise = new Promise(resolve => {
        resolve(
        app.innerHTML = `
        ${Header}
        <main>
            <div class='encryptorWrapper'>
                <div class=formWrapper>
                    <textarea class='stringToEncrypt' name='stringToEncrypt' placeholder=" "></textarea>
                    <label for='stringToEncrypt'>
                        Message to encrypt
                    </label>
                    <div class='buttonWrapper'>
                        <button class='sendButton'>Encrypt!</button>
                        <button class='resetButton'>Reset</button>
                    </div>
                </div>
                <p class='encrypted'>    
                
                </p>
            </div>
        </main>
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
