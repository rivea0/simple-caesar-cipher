class CaesarCipher {
    constructor(newRotation) {
        this.rotation = newRotation;
    } 

    lowerCaseAlpha = 'abcdefghijklmnopqrstuvwxyz';
    upperCaseAlpha = this.lowerCaseAlpha.toUpperCase();
    alphaLength = 26;

    encrypt(str) {
        let cipherText = '';
        for (let i = 0; i < str.length; i++)  {
            if (this.lowerCaseAlpha.includes(str[i])) {
                let index = this.getIndex(true, this.lowerCaseAlpha, str[i]);
                cipherText += this.lowerCaseAlpha[index];
            } else if (this.upperCaseAlpha.includes(str[i])) {
                let index = this.getIndex(true, this.upperCaseAlpha, str[i]);
                cipherText += this.upperCaseAlpha[index];
            } else {
                cipherText += str[i];
            }
        }
        return cipherText;
    }

    decrypt(str) {
        let plainText = '';
        for (let i = 0; i < str.length; i++) {
            if (this.lowerCaseAlpha.includes(str[i])) {
                let index = this.getIndex(false, this.lowerCaseAlpha, str[i]);
                plainText += this.lowerCaseAlpha[index];
            } else if (this.upperCaseAlpha.includes([str[i]])) {
                let index = this.getIndex(false, this.upperCaseAlpha, str[i]);
                plainText += this.upperCaseAlpha[index];
            } else {
                plainText += str[i];
            }
        }
        return plainText;    
    }

    getIndex(isEncrypt, casing, char) {
        /*
         Modulo calculation taken from: https://stackoverflow.com/a/13163436,
         to prevent negative results
        */
         if (isEncrypt) {
            let remain = (casing.indexOf(char) + this.rotation) % this.alphaLength;
            return Math.floor(remain >= 0 ? remain : remain + this.alphaLength);
        } else if (!isEncrypt) {
            let remain = (casing.indexOf(char) - this.rotation) % this.alphaLength;
            return Math.floor(remain >= 0 ? remain : remain + this.alphaLength);
        }
    }
}

export {CaesarCipher};