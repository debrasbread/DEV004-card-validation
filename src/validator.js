const validator = {
  isValid, maskify,
};
function isValid(cardNumber) {
  console.log("isValid: ", cardNumber);
  const array = cardNumber.split("").map(Number).reverse();
  console.log("array + split + number + reverse: ", array);
  let sumPares = 0;
  let sumImpares = 0;
  for (let i = 0; i < array.length; i++) {
    console.log("bucle for: ", i);
    if (i % 2 === 1) {
      console.log("determino pares: ");
      const prodPares = array[i] * 2;
      if (prodPares >= 10) {
        console.log("prodpares>=10: ");
        sumPares += Math.floor(prodPares / 10) + (prodPares % 10);
      }
      else {
        console.log("prodPares<10: ");
        sumPares += prodPares;
      }
    }
    else {
      console.log("Impares: ");
      sumImpares += array[i];
    }
  }
  console.log("sumImpares: ", sumImpares);
  console.log("sumPares: ", sumPares);
  const sumTotal = sumImpares + sumPares;
  console.log("sumTotal: ", sumTotal);

  if (sumTotal % 10 === 0) {
    console.log("Múltiplo de 10, válido: ");
    return true;
  }
  else {
    console.log("No es múltiplo de 10, inválido: ");
    return false;
  }
}
function maskify(cardNumber) {
  console.log("maskify(cardNumber): ", cardNumber);
  const last4Digits = cardNumber.slice(-4);
  console.log("últimos 4 dígitos de la tarjeta:", last4Digits);
  const maskedNumber = "".padStart(cardNumber.length - 4, "#");
  console.log("Número enmascarado:", maskedNumber);
  return maskedNumber + last4Digits;
}
export default validator;