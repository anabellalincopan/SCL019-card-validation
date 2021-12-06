import validator from './validator.js';

const numCard= document.getElementById('ncard');
const numCode= document.getElementById('ncode');
const validButton= document.getElementsById('validbtn');
const restartButton= document.getElementsById('restartbtn');
const alertBox= document.getElementsByClassName('alert-box');
const validCard= document.getElementsByClassName('valid');
const novalidCard= document.getElementsByClassName('no-valid');


// función para no dejar input vacio
validateNumCard(numCard);
function validateNumCard(numCard){
    while (numCard==''|| numCard==null){
        numCard= alert('Ingrese un número de tarjeta');
    }

    return 0;
}

// función para permitir solo números en input

// botón para validar tarjeta

// botón para reiniciar

// llamar a función is.valid

// llamar a función maskify



