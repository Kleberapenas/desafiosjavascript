let prompt = require("prompt-sync")()
//ex1
function ex001() {
    let soma = parseFloat(prompt("Insira um numero"))+parseFloat(prompt("Insira outro numero"));
    console.log(soma);
    return soma
}
//ex2
function ex002() {
    let idade = new Date().getFullYear()-parseInt(prompt("Em qual ano você naceu?"));
    console.log(idade);
    return idade
}
//ex3
function ex003() {
    let diferenca = parseFloat(prompt("Insira um numero"))-parseFloat(prompt("Insira outro numero"));
    if(diferenca<0) {
        console.log(diferenca*=-1);
    } else if (diferenca===0){
        console.log(0);
    } else {
        console.log(diferenca);
    };
    return diferenca
}
//ex4
function ex004() {
    let temperatura = parseFloat(parseInt(prompt("Insira uma temperatura em Celsius"))*9/5+32);
    console.log(temperatura);
    return temperatura
}
ex004()
//ex5
function ex005() {
    let NomeProduto = prompt("Insira o nome do produto");
    let PrecoUnitario = parseFloat(prompt("Insira o preço da unidade"));
    let QuantiaDeProdutos = parseInt(prompt("Quantos produtos deseja comprar"));
    let PrecoTotal = (PrecoUnitario*QuantiaDeProdutos)*0.18
    console.log(`Você comprou ${QuantiaDeProdutos} do produto ${NomeProduto} que cuta ${PrecoUnitario} por unidade \n Seu total doi de ${PrecoTotal} devido a 18% de impostos`);
    return PrecoTotal
}
//ex6
function ex006() {
    let NomeProduto = prompt("Nome do produto");
    let PrecoOriginal = parseFloat(prompt("Insira o preço original do produto"));
    let Desconto = Number(prompt("Insira a porcentagem do desconto"));
    console.log(`Você comprou ${NomeProduto} que tinha o preço original de ${PrecoOriginal} \n Com um desconto de ${Desconto}% seu preço agpra é de ${PrecoOriginal*Desconto/100}`)
    return PrecoTotal
}
//ex7
function ex007() {
    let ValorTotal = parseFloat(prompt("Qual o valor total da sua compra?"));
    let Parcelas = parseInt(prompt("Em quantas vezes deseja parcelar está compra?"));
};
//ex8
//ex9
//ex10