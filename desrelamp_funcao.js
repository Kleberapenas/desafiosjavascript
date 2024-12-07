prompt = require("prompt-sync")()

function produto(nome,preco,imposto){
    let precof = preco+(preco*(imposto/100))
    console.log(`O produto ${nome} tem um preço final de ${precof} reais`)
}

let Nome = prompt("Nome do produto")
let Preco = Number(prompt("Preço do produto"))
let Imposto = Number(prompt("Imposto do produto"))

produto(Nome,Preco,Imposto)