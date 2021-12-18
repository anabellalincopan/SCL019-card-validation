import validator from './validator.js';

// const numCode= document.getElementById('ncode');
// const validButton= document.getElementById('validbtn');
// const restartButton= document.getElementById('restartbtn');
// const alertBox= document.getElementByClassName('alert-box');
// const validCard= document.getElementByClassName('valid');
// const novalidCard= document.getElementByClassName('no-valid');


// función para no dejar input vacio

function validateNumCard(){
    const numCard= document.getElementById('ncard').value;
    if (numCard==''|| numCard===null){
    alert('Ingrese un número de tarjeta');
    }
    console.log(numCard)

}
document.getElementById('validbtn').addEventListener('click', validateNumCard, false);

// función para permitir solo números en input

// botón para validar tarjeta

// botón para reiniciar

// llamar a función is.valid

// llamar a función maskify



