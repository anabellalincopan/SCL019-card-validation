import validator from './validator.js';

// const numCode= document.getElementById('ncode');
// const validButton= document.getElementById('validbtn');
// const restartButton= document.getElementById('restartbtn');

function validateNumCard(){
    const numCard= document.getElementById('ncard').value;
    if (numCard==''|| numCard===null){
    alert('Ingrese un número de tarjeta');
    return false;
    }
    // console.log(numCard);

    // validar tarjeta
    const Validate= validator.isValid(numCard);
    const alertBox= document.getElementsByClassName('alert-box');
    const validCard= document.getElementsByClassName('valid');
    const noValidCard= document.getElementsByClassName('no-valid');
    for (let i = 0; i < alertBox.length;i++) {
        if (Validate === true){
            alertBox[i].style.display= 'block';
            noValidCard[i].style.display= 'none';
            validCard[i].style.display= 'block';
        } else {
            alertBox[i].style.display= 'block';
            noValidCard[i].style.display= 'block';
            validCard[i].style.display= 'none';
        }
    }


}
document.getElementById('validbtn').addEventListener('click', validateNumCard, false);

// función para permitir solo números en input


// botón para reiniciar


// llamar a función maskify



