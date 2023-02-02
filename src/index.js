import validator from './validator.js';
function validate() {
  console.log("validate: " + validate);
  const cardNumber=document.getElementById("cardnumber").value;
  console.log("cardNumber: " + cardNumber);
  if(cardNumber.length===0||/^\s+$/.test(cardNumber)||isNaN(cardNumber)) {
    document.getElementById("introNumber").innerHTML = "Por favor, introduce un número.";
    return;
  }
  else {
    const result = validator.isValid(cardNumber);// estaba fuera de else
    if (result === true) {
      document.getElementById("valida").innerHTML = "Tarjeta inválida";
        
        
      const maskedCard = validator.maskify(cardNumber);
      document.getElementById("masked-card").innerHTML = maskedCard;
    }
    else {
      document.getElementById("invalida").innerHTML = "Tarjeta inválida";
        

    }
  }
}


const btnValidar = document.getElementById("click");
btnValidar.addEventListener("click", validate);

export default validate;