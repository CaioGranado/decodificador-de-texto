// function warning () {
//     var textarea = document.querySelector('textarea');
//     if(textarea.value === isNaN){ //DEFINIR QUE SOMENTE SERÁ ACEITO LETRAS MINUSCULAS
//         alert("It isn't a lowcase letter!");
//     }
// }

// var buttom = document.querySelector('button');

// buttom.onclick = warning;

var button = document.querySelector(".decode");
var decodeBtn = document.querySelector(".encode");
var copyBtn = document.querySelector(".copy");
const inputText = document.querySelector(".input-text")
const mensage = document.querySelector(".mensage");

function encryptBtn() {
    const encryptText = encrypt(inputText.value);
    mensage.value = encryptText;
}

function encrypt(encryptString) {
    if (isNaN(encryptString)){
        let codeMatrix = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a", "ai"]];
        encryptString = encryptString.toLowerCase();
        var image = document.querySelector(".no-data-image");
        image.style.backgroundImage = "none";

        for(let i = 0; i < codeMatrix.length; i++) {
            if(encryptString.includes(codeMatrix[i][0])) {
                encryptString = encryptString.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
            }
        }
    return encryptString;
    } else {
        alert("Only letters, don't use accented letters or special characters ❌!@#$%¨12345éèãâ❌");
    }
}

function decryptBtn() {
    const decryptText = decrypt(inputText.value);
    mensage.value = decryptText;
}

function decrypt(decryptString) {
    let codeMatrix = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"],];
    decryptString = decryptString.toLowerCase();
    var image = document.querySelector(".no-data-image");
    image.style.backgroundImage = "none";

    for(let i = 0; i < codeMatrix.length; i++) {
        if(decryptString.includes(codeMatrix[i][0])) {
            decryptString = decryptString.replaceAll(codeMatrix[i][1], codeMatrix[i][0]);
        }
    }
    return decryptString;
}

function copy(){
    var text = document.querySelector(".mensage").select();
    document.execCommand("copy");
    
    alert("The text was copy for transfer area")
}

copyBtn.onclick = copy;
decodeBtn.onclick = decryptBtn;
button.onclick = encryptBtn ;