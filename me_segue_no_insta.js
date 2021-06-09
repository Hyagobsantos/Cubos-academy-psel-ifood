// Você está trabalhando numa empresa que desenvolveu um aplicativo que cria filtros para redes sociais. Neste aplicativo, para aplicar o filtro adequadamente, é necessário identificar se a foto foi tirada no modo retrato, paisagem, ou se a foto é quadrada.

// Você ficou com a tarefa de desenvolver essa funcionalidade.

function solucao(largura, altura) {
    //seu codigo aqui
  
      if(largura > altura){
          console.log("PAISAGEM")
      }else if(largura < altura ){
          console.log("RETRATO")
      }else{
          console.log("QUADRADA")
      }
          
    
  }
  
  function processData(input) {
      const x = input.trim().split(" ");
        solucao(parseInt(x[0], 10), parseInt(x[1], 10));
  } 