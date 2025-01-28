/*// Arrays

const lista = [1, 2, 3, 4, 5];
console.log(lista);

// Propriedades

const lista = [1, 2, 3, 4, 5];
console.log(lista.length);
console.log(lista[0]);

const nome = "Mônica Gusmão Lafrande Alves"
console.log(nome.length);

// Métodos

const lista1 = [1, 2, 3, 4, 5];
const lista2 = [4, 5, 6, 7, 8];
const listasJuntas = lista1.concat(lista2);
console.log(listasJuntas);

// Objetos

const pessoa = {
    nome: "Mônica",
    idade: 33,
};
console.log(pessoa);
console.log(pessoa.nome);

// Criando e deletando propriedades

const pessoa = {
    nome: "Mônica",
    idade: 33,
    cidade:"Campina Grande",
    bairro: "Catolé",
};
console.log(pessoa);

pessoa.mae = "Altelina";
console.log(pessoa);

delete pessoa.idade;
console.log(pessoa);

// Mais sobre objetos

const obj = {
    a: "teste",
    b: true,
};
console.log(obj instanceof Object);
const obj2 = {
    c: [],
};

Object.assign(obj2, obj);
console.log(obj2);

// Conhecendo melhor os objetos

// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
console.log(Object.entries(obj2));

// Mutação

const a = {
    name: "Mônica",
};

const b = a; //Apenas uma referência, o que fizer em um interfere no outro

 console.log(a);
 console.log(b);

 a.age = 33;
 console.log(b);

//  Loop em array

const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// Push e pop

const lista = [1, 2, 3, 4, 5];
lista.push(6);
console.log(lista);

const removido = lista.pop();
console.log(lista);
console.log(removido);

const lista2 = ["Mônica", "Gusmão", "Lafrande"];
lista2.push("Alves")
console.log(lista2);

lista2.pop();
console.log(lista2);

// Shift e unshift

const lista2 = ["Mônica", "Gusmão", "Lafrande"];
const removido = lista2.shift();
console.log(removido);
console.log(lista2);

lista2.unshift("Alves");
console.log(lista2);

// IndexOf LastIndexOf

const lista = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];
console.log(lista.indexOf("Morango"));
console.log(lista.indexOf("Abacate"));
console.log(lista.lastIndexOf("Abacate"));

// Slice

const lista = ["a", "b", "c", "d", "e", "f", "g"];
const arraySlice = lista.slice(2, 5);
console.log(arraySlice);

// Foreach

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lista.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const pessoas = [
    {nome: "Mônica", idade: 33},
    {nome: "OI", idade: 31},
    {nome: "Olá", idade: 23},
]
pessoas.forEach((pessoa) => {
    console.log(`Exibindo pessoa: ${pessoa.nome}`);
});

// Includes

const lista = ["Maçã", "Banana", "Ameixa", "Morango"];
console.log(lista.includes("Banana"));

// Reverse

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
lista.reverse();
console.log(lista)

// Métodos de String
// Trim

const nome = "  testando   \n";
console.log(nome);
console.log(nome.trim());

// PadStart

const numero = "1";
const novoNumero = numero.padStart(5, "0");
console.log(novoNumero);

const numero2 = "1";
const novoNumero2 = numero.padEnd(5, "0");
console.log(novoNumero2);

// Split e Join

const frase = "O rato roeu a roupa do rei de roma";
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

const fraseJunta = arrayDaFrase.join(" ");
console.log(fraseJunta);

// Repeat
const nome = "Mônica ";
console.log(nome.repeat(5));

// Rest operator -> Pode receber quantidade infinita de argumentos

const somaInfinita = (...argumentos) => {
    let total= 0;
    for(let i = 0; i < argumentos.length; i++) {
        total += argumentos[i];
    }
    return total;
};
console.log(somaInfinita(1, 2, 3));

// For...of

const somaInfinita = (...argumentos) => {
    let total = 0;
    for(num of argumentos) {
        total += num;
    }
    return total;
};
console.log(somaInfinita(1, 2, 3, 535, 453, 6, 3));

// Destructuring em objetos

const pessoa = {
    nome:"Mônica",
    sobrenome: "Alves",
    idade: 33,
};
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);

const {nome: primeironome} = pessoa;
console.log(primeironome);

// Destructurin em arrays

const lista = ["Maçã", "Banana", "Ameixa", "Melão"];
const [fruta1, fruta2, fruta3, fruta4] = lista;
console.log(fruta1, fruta2, fruta3, fruta4);*/

// JSON

const myJson = '{"name": "Mônica", "idade": 33, "skill": ["Javascript", "Python", "HTML"]}';

// Conversão de JSON

const myObject = JSON.parse(myJson);
console.log(myObject);
myObject.isOpenToWork = true;
console.log(myObject);

const newJson = JSON.stringify(myObject);
console.log(newJson);