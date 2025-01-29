/* // setTimeout

console.log("Ainda não executou");
setTimeout(function() {
    console.log("Requisição assíncrona")
}, 2000);

console.log("Ainda não executou2");

// setInterval - é executada de tempos em tempos, como um loop infinito

console.log("Ainda não executou");

setInterval(function() {
    console.log("Intervalo assíncrono");
}, 3000);

console.log("Ainda não executou2");

// Promises

const promessa = Promise.resolve(5 + 5);
console.log("Algum código");

promessa.then((value) => {
  console.log(`A soma é ${value}`);
  return value;
})
.then((value) => value -1)
.then((value) => console.log(`Agora é ${value}`));

console.log("Outro código");

// Falha na promise
Promise.resolve(4 * "fjf")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores inválidos");
    }
  })
  .catch((err) => console.log(`Um erro ocorreu ${err}`));*/

// rjeitando promises

function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10`);
    } else {
      reject(new Error("Número muito baixo"));
    }
  });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log`O resultado é ${v}`).catch((err) =>
  console.log(`Um erro ocorreu ${err}`)
);
    