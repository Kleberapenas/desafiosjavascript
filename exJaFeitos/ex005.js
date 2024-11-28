let prompt = require("prompt-sync")()
let nome = prompt("Insira seu nome");
let horario = prompt("Insira se é manhã tarde ou noite");

if(horario !="manha" && horario!="tarde" && horario!="noite") {
    console.log("Horario invalido");
} else {
    console.log(`Ola ${nome} boa ${horario}`);
}