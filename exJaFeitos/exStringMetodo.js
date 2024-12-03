//ex1
let frase = "Aprender Javascrift é divertido?"
function ex1(){
    console.log(frase.length)
}
//ex2
function ex2(){
    console.log(frase.toUpperCase().concat('!'))
}
//ex3
let nome = "Ana Clara"
function ex3(){
    console.log(nome.replace("Ana", "Maria"));
}
//ex4
function ex4(){
    console.log("Eu gosto de programar".includes("gosto"));
}
ex4()
//ex5
function ex5(){
    let palavra = "computador";
    console.log(palavra.substring(3,5));
}
//ex6
function ex6(){
    let senha = "JavaScript123"
    if(senha.length()>=8){
        console.log("Senha válida")
    } else {
        console.log("Senha inválida")
    };
}
//ex7
function ex7(){
    let texto = "Eu amo programar em JavaScript"
    if(texto.includes("JavaScript")){
       console.log("Palavra encontrada") 
    } else {
       console.log("Palavra não encontrada") 
    };
}