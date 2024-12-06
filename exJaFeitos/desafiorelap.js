const pessoas = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
  ];

  for(let pessoa in pessoas){
    for(let chave in pessoas[pessoa]){
        console.log(chave+": "+pessoas[pessoa][chave])
    }
    console.log("----------")
  }