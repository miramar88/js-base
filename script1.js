let num = +prompt("Напишите какое-нибудь число");

let numType = typeof num;

if (isNaN(num) == true) {
  alert("Написанное Вами не является числом");
}

else if (numType == "number") {
  if (num % 2 == 0) {
    alert("Число четное");
  }
  else {
    alert("Число нечетное");
  }
}


