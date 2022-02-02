import {CaesarCipher} from "./script.js";

let encrypt = document.querySelector('#encrypt');
let decrypt = document.querySelector('#decrypt');
let text = document.querySelector('#text');
let shift = document.querySelector('#rotation');
let buttons = [encrypt, decrypt];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', displayResult);
}

function displayResult() {
    let resultArea = document.querySelector('.result');
    if (resultArea.hasChildNodes()) {
        resultArea.removeChild(resultArea.childNodes[0]);
    }
    let code = new CaesarCipher(parseInt(shift.value));
    let result = code.rotate(text.value);
    let p = document.createElement('p');
    resultArea.appendChild(p);
    p.textContent = `Result: ${result}`;
}
