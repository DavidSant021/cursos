const pessoa1 = {
    nome: 'David',
    sobrenome: 'Santiago',
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
};

pessoa1.fala();
