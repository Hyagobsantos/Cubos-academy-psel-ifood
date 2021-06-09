// Numa determinada festa é permitida a entrada apenas de pessoas maiores de idade. Você, que é uma pessoa programadora que trabalha na empresa que está produzindo a festa, deve fazer um programa que, dada a idade da pessoa na tela, informe se a pessoa pode entrar ou deve ser barrada.

function solucao(idade) {
      if(idade >= 18){
          console.log("PODE ENTRAR")
      }else{
          console.log("ACESSO NEGADO")
      }
    
  }
  
  function processData(input) {
        solucao(parseInt(input.trim(), 10));
  } 

