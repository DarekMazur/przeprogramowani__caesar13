import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Encrypt from './components/Encrypt/Encrypt';

const app = document.querySelector('body');

const promise = new Promise(resolve => {
        resolve(
        app.innerHTML = `
        ${Header}
        <main>
            <p>
                <textarea class='stringToEncrypt' placeholder='PRZEPROGRAMOWANI'></textarea>
                <button class='sendButton'>Encrypt!</button>
                <button class='resetButton'>Reset</button>
            </p>
            <p class='encrypted'>    
            
            </p>
        </main>
        ${Footer}
    `)
    });
  
  promise
    .then(result => {
        const input = document.querySelector('.stringToEncrypt')
        const encryptedContent = document.querySelector('.encrypted')
        const sendButton = document.querySelector('.sendButton')
        const resetButton = document.querySelector('.resetButton')

        const encryptContent = () => (
            encryptedContent.innerHTML = (input.value === '' ? Encrypt(input.placeholder) : Encrypt(input.value))
        )

        const resetForm = () => {
            input.value = '';
            input.placeholder = 'PRZEPROGRAMOWANI';
            encryptedContent.innerHTML = '';
        }

        sendButton.onclick = encryptContent
        resetButton.onclick = resetForm
    }
)
