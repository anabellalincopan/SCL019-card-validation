import validator from './validator.js';

function validateNumCard() {
    let numCard= document.getElementById('ncard').value;
    let alertBox= document.getElementsByClassName('alertBox');
    // alert para ingresar número
    if (numCard===''|| numCard===null){
    alert('Ingrese un número de tarjeta');
    return false;
    }
    // console.log(numCard);

    // validar tarjeta y mostrar número enmascarado
    let validate= validator.isValid(numCard);
    let mask= validator.maskify(numCard);

    for (let i= 0; i < alertBox.length; i++){
    if (validate === true) {
        alertBox[i].style.display= 'block';
        document.getElementById('valid').innerText= 'Su giftcard ' + mask + ' es válida';

    } else{
        alertBox[i].style.display= 'block';
        document.getElementById('valid').innerText= 'Su giftcard ' + mask + ' es inválida';
    }
}
}
document.getElementById('validbtn').addEventListener('click', validateNumCard, false);

// función para permitir solo números en input
function event(evt) {
    function keyNumbers(key) {
        let code= key.keyCode || key.which;
        if(code >= 48 && code <= 57) {
            return true;
        } else {
            alert('Ingrese solo números');
            return false;
        }
    }
    if (keyNumbers(evt) === false) {
    evt.preventDefault();
    }
}
document.getElementById('ncard').addEventListener('keypress', event, false);

// función para reiniciar
function inputClean() {
    let numCard= document.getElementById('ncard');
    let numCode= document.getElementById('ncode');
    let alertBox= document.getElementsByClassName('alertBox');
    numCard.value='';
    numCode.value='';
    for (let i= 0; i < alertBox.length; i++) {
        alertBox[i].style.display='none';
    }
}
document.getElementById('restartbtn').addEventListener('click', inputClean, false);

