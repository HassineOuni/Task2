let x = document.querySelector("#X");
let y = document.querySelector("#Y");
function showSomme() {
  document.querySelector("h3").innerHTML = somme(Number(x.value),Number(y.value));
}
function somme(x, y) {
  return "somme : " + (x + y);
}

function showSoustrac() {
    document.querySelector("h3").innerHTML = soustrac(Number(x.value),Number(y.value));
}
function soustrac(x, y) {
  return "somme : " + (x - y);
}

function showMult() {
    document.querySelector("h3").innerHTML = mult(Number(x.value),Number(y.value));
}
function mult(x, y) {
  return "somme : " + (x * y);
}

function showDiv() {
    document.querySelector("h3").innerHTML = div(Number(x.value),Number(y.value));
}
function div(x, y) {
  return "somme : " + (x / y);
}
