document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypal = document.getElementById("mastercardBtn");


  if(document.getElementById("myCheckBox").checked){
    console.log("You are subscribed!");
  }
  else{
    console.log("You are Not subscribed");
  }

  if(visaBtn.checked){
    console.log("You are paying with a Visa!");
  }

  else if(mastercardBtn.checked){
    console.log("You are paying with a MasterCard!");
  }

  else if(paypalBtn.checked){
    console.log("You are paying via PayPal!");
  }

  else{
    console.log("You must select a payment type!");
  }
}