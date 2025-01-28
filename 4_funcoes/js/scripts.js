/*// Criando uma função

function minhaFuncao() {
    console.log("Testando")
}
minhaFuncao();
minhaFuncao();

const funcaoVariavel = function() {
    console.log("Função em variável");
};

funcaoVariavel();

function comParametro(texto) {
    console.log(`Imprimindo: ${texto}`);
}
comParametro("Outra informação");

// Return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a,b);

console.log(resultado);
console.log(soma(b,c));

// Arrow function

const testeArrow = () => {
    console.log("Esta é uma arrow function")
}
testeArrow();

const parImpar = (n) => {
    if (n % 2 == 0) {
        console.log("Número par");
        return
    } else {
        console.log("Número ímpar");
    }
}
parImpar(10);
parImpar(5);

// Mais sobre arrow function

const numeroQuadrado = (n) => {
    return n * n;
}

console.log(numeroQuadrado(10));

const numeroQuadrado = (n) => n * n;
console.log(numeroQuadrado(5));

const nome = () => console.log("Mônica");
nome();

// Argumentos opcionais

const multiplication = (m, n) => {
    if(n === undefined) {
        return m * m;
    } else {
        return m * n;
    }
}

console.log(multiplication(5, 10));
console.log(multiplication(5));

// Argumento default

const saudacaoPersona = (nome, sauda = "Olá") => {
    return `${sauda}, ${nome}`
}
console.log(saudacaoPersona("Mônica"));
console.log(saudacaoPersona("Mônica", "Bom dia"))

const saudacaoPersonalizada = (nome, saudacao = "Olá") => {
    return `${saudacao}, ${nome}.`;
}
console.log(saudacaoPersonalizada("Mônica"));
console.log(saudacaoPersonalizada("Paola", "Boa tarde"));*/
