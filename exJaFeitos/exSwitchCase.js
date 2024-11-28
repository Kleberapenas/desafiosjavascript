const prompt = require("prompt-sync")()

function bebida() {
    let escolha = Number(prompt
        (`Escolha uma bebida. \n
        1.Àgua.\n
        2.Suco.\n
        3.Refrigerante\n
        4.Café.\n`));
        switch(escolha){
            case 1:
                console.log("Aqui esta sua água");
                break;
            case 2:
                console.log("Aqui esta seu suco");
                break;
            case 3:
                console.log("Aqui sta seu refrigerante");
                break;
            case 4:
                console.log("Aqui esta seu café");
                break;
            default:
                console.log("Opção invalida");
        }
    return 0
}

function calculadora() {
    let escolha = Number(prompt
        (`Escolha uma equação. \n
        1.Soma.\n
        2.Subtrção.\n
        3.Multiplicação\n
        4.Divisão.`));
        let Numero1 = Number(prompt("escolha um numero"));
        let Numero2 = Number(prompt("escolha mais um numero"));
        switch(escolha){
            case 1:
                console.log(Numero1+Numero2);
                break;
            case 2:
                console.log(Numero1-Numero2);
                break;
            case 3:
                console.log(Numero1-Numero2);
                break;
            case 4:
                switch(Numero2){
                    case 0:
                        console.log("Não é possivle dividir por zero");
                        break;
                    default:
                        console.log(Numero1/Numero2)
                };
                break;
            default:
                console.log("Opção invalida");
        }
        return 0
};

function cores() {
    let cor = prompt(
        `Escolha uma cor.\n
        Red\n
        Blue\n
        Green.`
    )
    switch(cor){
        case "Red":
            console.log("Red = vermerlho");
            break;
        case "Blue":
            console.log("Blue = Azul");
            break;
        case "Green":
            console.log("Green = Verde");
            break;
    }
    return 0;
};

function desafio() {
    let escolha = Number(prompt(
        `Escolha uma opção\n
        1.Workshop
        2.Palestra
        3.Hackathon`
    ))
    let custo = 0
    switch(escolha){
        case 1:
            let participantes = Number(prompt(""))
            custo = 0
            break;
    }
    return 0;
};