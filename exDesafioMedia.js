let prompt = require("prompt-sync")()
//Entrada de informação do professor
let NomeAlunos = prompt("Qual o nome do aluno?");
let Nota1 = parseFloat(prompt("Qual a primeira nota do aluno?"));
let Nota2 = parseFloat(prompt("Qual a segunda nota do aluno?"));
let Nota3 = parseFloat(prompt("Qual a terceira nota do aluno?"));
let Falta = Number(prompt("Qual a porcentagem de falta do aluno?"));
let media = parseInt((Nota1+Nota2+Nota3)/3)
//Teste logico se o aluno tiver media maior ou igual a 7 e menos de 25% de falta ele esta APROVADO
if(media>=7 && Falta<25) {
    console.log("Aluno aprovado");
}
//Teste logico se o aluno tiver media menor que 7 porém maior ou igual a 5 e menos de 25% de falta ele esta de RECUPERAÇÃO
else if(media<7 && media>=5 && Falta<25) {
    console.log("O aluno esta de recuperação");
} 
//Teste logico se o aluno tiver media menor que 5 e mais de/ou 25% de falta ele esta de REPROVADO
else if(media<5 && Falta>=25){
    console.log("O aluno esta reprovado");
};