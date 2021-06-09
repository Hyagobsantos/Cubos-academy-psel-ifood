// Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

// Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

// Para que essa promoção funcionasse, foi necessário fazer uma atualização no software do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.

// Você ficou com essa tarefa.

function solucao(precos) {
    
    var soma = 0;
    var resultado = 0;
    
    for(let i = 0; i < precos.length; i++){
        soma += precos[i]
      }
    
    
    for(let i = 0; i < precos.length; i++){
          var menor = precos[i]
          for(let i = 0; i < precos.length; i++){
              if(precos[i] < menor)  {
                menor = precos[i]
            }
          }
        }
      
    if(precos.length > 4){ 
        resultado = soma - menor;
    }else{
      resultado = soma;
    }
    
    return console.log(resultado);
        
    }
    
    function processData(input) {
        solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
    }