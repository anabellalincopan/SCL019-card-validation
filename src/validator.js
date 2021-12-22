const validator = {

  //FÓRMULA DE LUHN



  isValid: function(numCard) {
    // pasar array a orden inverso
    let inverseNumber= numCard.toString().split('').reverse().map(Number);
    // console.log(inverseNumber);


    // aplicar operación a números en posiciones pares
      let newNumber= inverseNumber.map((num, i)=> {
        if(i % 2 === 1){
          // a todos los numeros que ocupan las posiciones pares se les multiplica por dos
          let multiply = (num * 2);
          //y si el doble de ese numero es mayor a 9 debemos sumar los digitos del resultado
          let digitSum= multiply.toString().split('').map(Number).reduce(function(a, b){
            if (multiply > 9){
              return a+b;
            // console.log(multiply)
          } else {
            return multiply;
          }
          },0);
          return digitSum;
          // console.log(digitSum)
        } else {
          return num;
        }
      });
      //console.log(newNumber)

       // sumar dígitos
      newNumber= newNumber.reduce((prev, next) => {
        return prev + next;
      },0)
      // console.log(newNumber)

      // validar fórmula
      if (newNumber % 10 === 0) {
        return true;
      } else {
        return false;
      }
  }



  // MASKIFY




}
export default validator;
