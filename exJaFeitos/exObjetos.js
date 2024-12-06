//ex1
const livro = {
    nome: "Senhor dos Aneis",
    autor: "J.R. Tolkin",
    ano: "1954"
}

console.log(livro.nome)
//ex2
let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: "2020"
}
carro.ano = "2022"
carro.cor = "Prata"

console.log(carro)
//ex3
let pessoa = {
    nome: "Carlos",
    idade: 28,
    comprimento: function(){
        console.log(`Ola eu nome é ${this.nome} eu tenho ${this.idade} anos de idade`)
    }
}
