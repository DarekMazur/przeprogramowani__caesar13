import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Encrypt from './components/Encrypt/Encrypt';

const app = document.querySelector('#app');

app.innerHTML = `
    ${Header}
    <p>
        ${Encrypt('Schroedinger to mój kot. I ten kot - choć bywa nieznośny i wredny - ogólnie jest uroczą, puszystą kulką :)')}
    </p>
    ${Footer}
`;
