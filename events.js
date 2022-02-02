import {CaesarCipher} from "./script.js";

let encrypt = document.querySelector('#encrypt');
let decrypt = document.querySelector('#decrypt');
let text = document.querySelector('#text');
let shift = document.querySelector('#rotation');


encrypt.addEventListener('click', () => {
    if (document.querySelector('.result').hasChildNodes()) {
        document.querySelector('.result').style.display = none;
    }
    let code = new CaesarCipher(parseInt(shift.value));
    let result = code.rotate(text.value);
    let p = document.createElement('p');
    p.textContent = result;
    document.querySelector('.result').append('Result:');
    document.querySelector('.result').append(p);
});

decrypt.addEventListener('click', () => {
    if (document.querySelector('.result').hasChildNodes()) {
        document.querySelector('.result').style.display = none;
    }
    let code = new CaesarCipher(parseInt(shift.value));
    let result = code.rotate(text.value);
    let p = document.createElement('p');
    p.textContent = result;
    document.querySelector('.result').append('Result:');
    document.querySelector('.result').append(p);
});
