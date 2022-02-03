import {CaesarCipher} from "./script.js";

let encrypt = document.querySelector('#encrypt');
let decrypt = document.querySelector('#decrypt');
let text = document.querySelector('#text');
let shift = document.querySelector('#rotation');

encrypt.addEventListener('click', () => {
    let resultArea = document.querySelector('.result');
    if (resultArea.hasChildNodes()) {
        resultArea.removeChild(resultArea.childNodes[0]);
    } 
    if (!shift.value) {
        return;
    } else {
        let p = document.createElement('p');
        let code = new CaesarCipher(parseInt(shift.value));
        let result = code.encrypt(text.value);
        resultArea.appendChild(p);
        p.textContent = result;    
    }
});

decrypt.addEventListener('click', () => {
    let resultArea = document.querySelector('.result');
    if (resultArea.hasChildNodes()) {
        resultArea.removeChild(resultArea.childNodes[0]);
    } 
    if (!shift.value) {
        return;
    } else {
        let p = document.createElement('p');
        let code = new CaesarCipher(parseInt(shift.value));
        let result = code.decrypt(text.value);
        resultArea.appendChild(p);
        p.textContent = result;    
    }
});
