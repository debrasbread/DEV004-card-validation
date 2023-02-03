import validator from './validator.js';

function validate() {

  const cardNumber = document.getElementById("cardnumber").value;
  const nombre = document.getElementById("name").value;

  document.getElementById("introNumber").innerHTML = "";
  document.getElementById("valida").innerHTML = "";
  document.getElementById("invalida").innerHTML = "";
  document.getElementById("masked-card").innerHTML = "";
  document.getElementById("introName").innerHTML = "";

  if (!/^[a-zA-Z\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\s]+$/.test(nombre)) {
    document.getElementById("introName").innerHTML = "Por favor, introduce tu nombre.";
    return;
  }

  if (cardNumber.length === 0 || /^\s+$/.test(cardNumber) || isNaN(cardNumber)) {
    document.getElementById("introNumber").innerHTML = "Por favor, introduce un número de tarjeta.";
    return;
  }
  else {
    const result = validator.isValid(cardNumber);
    if (result === true) {
      document.getElementById("valida").innerHTML = "Tarjeta válida" + "<p></p>" + "¡Compra exitosa!";
      const maskedCard = validator.maskify(cardNumber);
      document.getElementById("masked-card").innerHTML = maskedCard;
    }
    else {
      document.getElementById("invalida").innerHTML = "Tarjeta inválida";
    }
  }

  document.getElementById("cardnumber").value = "";

}

const btnValidar = document.getElementById("click");
btnValidar.addEventListener("click", validate);

export default validate;