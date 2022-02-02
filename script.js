class CaesarCipher {
    constructor(newRotation) {
        this.rotation = newRotation;
    } 
    
    buildRotationMap() {
        let rotationMap = {};
        const length = 26;
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < lowercase.length; i++) {
            let charCode = lowercase[i].charCodeAt();
            let char = String.fromCharCode(charCode + this.rotation % length);
            if (char < 'a' || char > 'z') {
                char = String.fromCharCode(char.charCodeAt() - length);
                rotationMap[lowercase[i]] = char;
                rotationMap[lowercase[i].toUpperCase()] = char.toUpperCase();
            } else {
                rotationMap[lowercase[i]] = char;
                rotationMap[lowercase[i].toUpperCase()] = char.toUpperCase();
            }
        }
        return rotationMap;
    }
    
    rotate(str) {
        let cipherText = '';
        let rotationMap = this.buildRotationMap();
        for (let i = 0; i < str.length; i++) {
            if (!(str[i] in rotationMap)) {
                cipherText += str[i];
            } else {
                cipherText += rotationMap[str[i]];
            }
        }
        return cipherText;
    }
}

export {CaesarCipher};