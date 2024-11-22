let prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome:");
let horario = prompt("Manhã ou Tarde?");
if(horario==="Tarde") {
    console.log("Boa Tarde",nome);
} else if(horario==="Manha"){
    console.log("Bom Dia",nome);
} else if(horario==="Noite"){
    console.log("Boa Noite",nome);
} else {
    console.log("Opção invalida")
}