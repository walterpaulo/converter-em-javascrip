
var boxStringPrimeiro = document.getElementById("box-string-primeiro");
var boxBytePrimeiro = document.getElementById("box-byte-primeiro");
var boxSelectPrimeiro = document.getElementById("box-select-primeiro");



function convertStringForByte() {
  if (boxStringPrimeiro.value == "") {
    return false;
  }
  boxBytePrimeiro.innerHTML = "";
  const encoder = new TextEncoder(boxBytePrimeiro.value);
  const bytes = encoder.encode(boxStringPrimeiro.value);

  boxBytePrimeiro.innerHTML = bytes;
}

function limparStrinForByte() {
  boxStringPrimeiro.value = "";
  boxBytePrimeiro.innerHTML = "";
}

boxStringPrimeiro.addEventListener("input", function() {
  const text = boxStringPrimeiro.value;
  if(text.length > 3){
    // alert("oi")
  }
});