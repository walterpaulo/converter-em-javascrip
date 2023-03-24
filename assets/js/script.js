
var boxStringPrimeiro = document.getElementById("box-string-primeiro");
var boxBytePrimeiro = document.getElementById("box-byte-primeiro");
var boxSelectPrimeiro = document.getElementById("box-select-primeiro");
var root = document.body;

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

boxStringPrimeiro.addEventListener("input", function () {
  const text = boxStringPrimeiro.value;
  if (text.length > 3) {
    // alert("oi")
  }
});

function copyText() {
  boxBytePrimeiro.select();
  boxBytePrimeiro.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(boxBytePrimeiro.value);
  if (boxBytePrimeiro.value.length > 0) {
    this.mensageToast(("Copiado o texto: " + boxBytePrimeiro.value), "mgs-sucesso");
  }
}

function mensageToast(mensagem, status) {
  // mgs-opcional, mgs-sucesso, mgs-error

  var statusMensagem = (status == null || status == "" || status == undefined) ? "msg-opcional" : status;
  var container = document.createElement("div");
  container.classList.add(statusMensagem)
  container.classList.add("toast", "lign-items-center", "fade", "hide", "show");
  container.setAttribute("role", "alert");
  container.setAttribute("aria-live", "assertive");
  container.setAttribute("aria-atomic", "true");

  var box = document.createElement("div");
  box.classList.add("d-flex");

  var textoBox = document.createElement("div");
  textoBox.classList.add("toast-body");
  textoBox.textContent = mensagem.substr(0, 40);

  var botaoClose = document.createElement("button");
  botaoClose.setAttribute("type", "button");
  botaoClose.classList.add("btn-close", "me-2", "m-auto");
  botaoClose.setAttribute("data-bs-dismiss", "toast");
  botaoClose.setAttribute("aria-label", "Close");

  box.appendChild(textoBox);
  box.appendChild(botaoClose);

  container.appendChild(box);
  root.appendChild(container);

  setTimeout(function () {
    container.remove();
  }, 3000);
}
