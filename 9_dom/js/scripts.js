// // Selecionando por tag

const listaItens = document.getElementsByTagName("li");
console.log(listaItens);

// // Selecionando por id

// const titulo = document.getElementById("title");
// console.log(titulo);

// // Selecionando por classe
// const produtos = document.getElementsByClassName("product");
// console.log(produtos);

// // Selecionando por css

// const productQuery = document.querySelectorAll(".product");
// console.log(productQuery);

// const mainContainer = document.querySelector("#main-container");
// console.log(mainContainer);

// // insertBefore

// const p = document.createElement("p");

// const header = titulo.parentElement;
// header.insertBefore(p, title);

// // appendChild

// const navLinks = document.querySelector("nav ul");
// const li = document.createElement("li");
// navLinks.appendChild(li);

// // replaceChild

// const h2 = document.createElement("h2");
// h2.textContent = "Meu novo título";
// header.replaceChild(h2, titulo);

// // createTextNode

// const meuTexto = document.createTextNode("Agora vamos colocar mais um título");
// console.log(meuTexto);
// const h3 = document.createElement("h3");
// h3.appendChild(meuTexto);
// console.log(h3);

// mainContainer.appendChild(h3);

// // Trabalhando com atributos

// const primeiroLink = navLinks.querySelector("a");
// console.log(primeiroLink);

// primeiroLink.setAttribute("href", "https://www.google.com.br");
// console.log(primeiroLink.getAttribute("href"));

// primeiroLink.setAttribute("target", "_blank");

// // Altura e largura dos elementos

// const footer = document.querySelector("footer");

// console.log(footer.offsetHeight);
// console.log(footer.offsetWidth);

// console.log(footer.clientHeight);
// console.log(footer.clientWidth);

// // Posição do elemento

// const produto1 = produtos[0];
// console.log(produto1.getBoundingClientRect());

// CSS com JS

// mainContainer.style.color = "red";
// mainContainer.style.backgroundColor = "#333";
// mainContainer.style.paddingBottom = "100px";

// Alterando estilos de HTMLCollection

// for(const li of listaItens) {
//     li.style.backgroundColor = "red";
// }