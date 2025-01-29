/*// Métodos
const animal = {
    nome: "Bobinho",
    latir: function() {
        console.log("Au au")
    }
};
console.log(animal.nome);
animal.latir();

// Aprofundando em métodos

const pessoa = {
    nome: "Mônica",
    getNome: function() {
        return this.nome;
    },
    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};
console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Maria");
console.log(pessoa.getNome());

// Prototype

const text = "Qualquer texto";
console.log(Object.getPrototypeOf(text));

// Classes básicas

const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

// Função como classe - função construtora

function criarCachorro(nome,raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;
    
    return cachorro;
}

const bob = criarCachorro("Bobinho", "vira-lata");
console.log(bob);

// Função como classe

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
};

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);

// Mais sobre classes

class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }
    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");
console.log(scania);
scania.descreverCaminhao();

// Override

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const monica = new Humano("Mônica", 33);
console.log(monica);

Humano.prototype.idade = "Não definida";
console.log(monica.idade);
console.log(Humano.prototype.idade);

// Symbols

class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();

Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);

// Getter e setter

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo "${this.titulo}"`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js";
console.log(myPost);

// Herança

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const lobinho = new Lobo(4, "Lobinho");
console.log(lobinho);

// Inatanceof - verifica se um objeto é pai do outro

console.log(lobinho instanceof Lobo);
console.log(Lobo instanceof Mamifero);*/


