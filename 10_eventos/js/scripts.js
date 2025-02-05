// // Adicionando eventos

// const botao = document.querySelector("#my-button");

// botao.addEventListener("click", function () {
//   console.log("Clicou aqui");
// });

// Removendo eventos

const secondBtn = document.querySelector("#btn");
function imprimirMensagem() {
  console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});
