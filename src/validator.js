const validator = {

  //FÓRMULA DE LUHN

  // pasar array a orden inverso

  isValid: function (ncard){
    const inverseNumber= ncard.toString().split('').reverse().map(Number);
    console.log(inverseNumber)
    
  }


  // aplicar operación a números en posiciones pares
  // let newNumber= inverseNumber.map((num, i) => {
  //   if (i % 2 === 1) {
  //     const double = (num * 2);
  //     const m = double.toString().split('').reduce(function (a, b) {
  //       if (double > 9) {
  //         return a + parseInt(b);
  //       } else {
  //         return double;
  //       }
  //     }, 0);
  //     return m;
  //   } else {
  //      return num;
  //    }
  //  }

  // let pairNumber = pairArray.filter(
  //   function (num, ind) { return ind % 2 !== 0; })
  // let multiply= digitosPares.map(function (num) { return num * 2 });

  // sumar dígitos

  // let newNumber= newNumber.reduce((previus, next) => {
  //   const sum = previus + next;
  //   return sum;
  //   }, 0)

  // // validar tarjeta
  // if (newNumber % 10 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }



  // MASKIFY






}
export default validator;
