import Eliot from '../Eliot/Eliot'

const Header = () =>{
    return(`
        <header>
            <h1>Simple encryptor by Gacek</h1>
            <h2>${Eliot('Encrypt your message')}<h2>
        </header>
    `)}

export default Header()