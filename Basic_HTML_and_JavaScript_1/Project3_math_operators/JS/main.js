function addition() {
  var addition = 10 + 20;
  document.getElementById("Math").innerHTML = " 10 + 20 =  " + addition;
}

function subtraction() {
  var subtraction = 30 - 25;
  document.getElementById("Math2").innerHTML = " 30 - 25 =  " + subtraction;
}

function multiplication() {
  var multiplication = 7 * 81;
  document.getElementById("Math3").innerHTML = " 7 * 81 =  " + multiplication;
}

function division() {
  var division = 84 / 2;
  document.getElementById("Math4").innerHTML = " 84 / 2 =  " + division;
}

function multiple() {
  var multiple = (4+2) * 12 / 2 - 6;
  document.getElementById("Math5").innerHTML = "(4 + 2) * 12/2 - 6 =" + multiple;
}

function modulus() {
  var modulus = 27 % 4;
  document.getElementById("Math6").innerHTML = "27 % 4 = "  + modulus;
}

function Unary() {
  var x = 50;
  document.getElementById("Math7").innerHTML = -x;
}

function Increment () {
  var x = 2;
  x++;
  document.getElementById("Math8").innerHTML = x;
}

function Decrement () {
  var x = 7;
  x--;
  document.getElementById("Math9").innerHTML = x;
}

//Math.Random Assignment

window.alert(Math.random());

window.alert(Math.random()*10);


