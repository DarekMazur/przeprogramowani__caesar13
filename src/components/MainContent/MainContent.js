const MainContent = () => {
  return `
        <main>
            <div class='encryptorWrapper'>
                <div class='formWrapper'>
                    <div class='input'>
                        <textarea class='stringToEncrypt' name='stringToEncrypt' placeholder=" "></textarea>
                        <label for='stringToEncrypt'>
                            Message to encrypt
                        </label>
                    </div>
                    <div class='input'>
                    <input type='number'class='encryptionValue' name='rotValue' />
                    <label for='stringToEncrypt'>
                        Encryption value
                    </label>
                    </div>
                    <div class='buttonWrapper'>
                        <button class='sendButton'>Encrypt!</button>
                        <button class='resetButton'>Reset</button>
                    </div>
                </div>
                <div class='encryptedWrapper'>
                    <p class='encryptedHeader'>Your encrypted message:</p>
                    <p class='encrypted'>
                            
                    </p>
                </div>
                
            </div>
        </main>
    `;
};

export default MainContent();
