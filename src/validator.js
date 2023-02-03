const validator = {
  isValid, maskify,
};
function isValid(cardNumber) {
  const array = cardNumber.split("").map(Number).reverse();
  let sumPares = 0;
  let sumImpares = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      const prodPares = array[i] * 2;
      if (prodPares >= 10) {
        sumPares += Math.floor(prodPares / 10) + (prodPares % 10);
      }
      else {
        sumPares += prodPares;
      }
    }
    else {
      sumImpares += array[i];
    }
  }
  const sumTotal = sumImpares + sumPares;

  if (sumTotal % 10 === 0) {
    return true;
  }
  else {
    return false;
  }
}

function repeatString(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}
function maskify(cardNumber) {
  return repeatString("#", cardNumber.length - 4) + cardNumber.slice(-4);
}

export default validator;