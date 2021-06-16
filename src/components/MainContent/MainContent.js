const MainContent = () => {
    return(`
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
    `)
}

export default MainContent()