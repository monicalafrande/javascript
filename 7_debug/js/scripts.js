/*// Strict

"use strict";

// opa = "teste"; errado

// console.log

let a = 1;
let b = 2;

if(a == 1) {
    a = b + 2;
}

console.log(a);

for(let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

if(a > 5) {
    a = 25
}
console.log(a);

// Debugger

let c = 1;
let d = 2;

if (c == 1) {
    c = d + 2;
}

debugger;

for (let i = 0; i < d; i++) {
    c = c + 2;
};

console.log("executou o loop");

debugger;

if(c > 5) {
    c = 25;
}

// Tratamento de dados

function checkNumber(n) {
    const result = Number(n)

    if(Number.isNaN(result)) {
        console.log("Valor incorreto!");
    } else {
        console.log("Valor correto!");
        return result;
    }
};

checkNumber(5);
checkNumber("jgj");
checkNumber("10");

// Exceptions - mais utilizado para alertar outros programadores

let x = 10;
if (x !== 11) {
    throw new Error("O valor de x não pode ser diferente de 11!");
}

// Try catch - tentamos executar em try, se ocorre um erro cai no catch

try {
    const soma = x + y
} catch(error) {
    console.log(`Erro no programa: ${error}`)
};

// Assertions

function checkArray(arr) {
    if(arr.length === 0){
        throw new Error("O array precisa ter elementos");    
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    }
};
checkArray([1, 2, 3]);*/