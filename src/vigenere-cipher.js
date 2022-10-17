const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    }

    encrypt(raw, keyWord) {
        if (!raw || !keyWord) {
            throw new Error("Incorrect arguments!");
        }
        keyWord = keyWord.toLowerCase();
        let key = this._generateKey(raw, keyWord);
        let encrypted = "";
        for (let j = 0; j < raw.length; j++) {
            let rawChar = raw[j].toLowerCase();
            let rawIndex = this._getIndex(rawChar);
            if (rawIndex === -1) {
                encrypted += rawChar;
                continue;
            }
            let encryptedCharIndex =
                (rawIndex + this._getIndex(key[j])) % this.alphabet.length;
            encrypted += this.alphabet[encryptedCharIndex];
        }
        encrypted = encrypted.toUpperCase();
        return this.direct ? encrypted : encrypted.split("").reverse().join("");
    }

    decrypt(encoded, keyWord) {
        if (!encoded || !keyWord) {
            throw new Error("Incorrect arguments!");
        }
        encoded = encoded.toLowerCase();
        keyWord = keyWord.toLowerCase();
        let key = this._generateKey(encoded, keyWord);
        let decrypted = "";
        for (let j = 0; j < encoded.length; j++) {
            let rawChar = encoded[j];
            let rawIndex = this._getIndex(rawChar);
            if (rawIndex === -1) {
                decrypted += rawChar;
                continue;
            }
            let decryptedIndex =
                (rawIndex - this._getIndex(key[j])) % this.alphabet.length;
            decryptedIndex =
                decryptedIndex < 0
                    ? this.alphabet.length + decryptedIndex
                    : decryptedIndex;
            decrypted += this.alphabet[decryptedIndex];
        }
        decrypted = decrypted.toUpperCase();
        return this.direct ? decrypted : decrypted.split("").reverse().join("");
    }

    _generateKey(raw, keyWord) {
        let key = "";
        let invalidCounter = 0;
        for (let i = 0; i < raw.length; i++) {
            if (this.alphabet.includes(raw[i].toLowerCase())) {
                key += keyWord[(i - invalidCounter) % keyWord.length];
            } else {
                key += raw[i];
                invalidCounter++;
            }
        }
        return key;
    }

    _getIndex(char) {
        return this.alphabet.indexOf(char);
    }
}

module.exports = {
    VigenereCipheringMachine,
};
