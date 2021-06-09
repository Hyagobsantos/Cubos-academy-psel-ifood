// Você está trabalhando num aplicativo de mobilidade e ficou com a tarefa de fazer a funcionalidade que calcula o valor a pagar do usuário. Olha só que responsa, hein?

// A lógica é a seguinte:

// Caso a viagem seja muito curta, ou seja, dure menos de 05 minutos, a corrida custará 6 reais, indepententemente da distância percorrida.

// Caso a viagem seja média, ou seja, dure entre 05 minutos e uma hora, a viagem custará 1 real por minuto mais 50 centavos por quilômetro percorrido.

// Para viagens mais longas, que durem mais de uma hora, o preço da viagem deixa de depender do tempo e passa a depender apenas da distância percorrida.

// Neste caso, a viagem custará:

// 2 reais por quilômetro, caso a distância seja menor que 100km
// 1,50 reais por quilômetro, caso a distância seja 100km ou mais

function solucao(tempo, distancia) {
	let tempoHora = 60;
    let resultado = 0;
    let umReal = 100;
    let viagemCurta = 6;
    
    if(tempo < 5){
        //viagem curta
        resultado = console.log(umReal * viagemCurta)
    }else if(tempo > 5 && tempo < tempoHora){
        resultado = console.log((umReal * tempo) + (50 * distancia))
    }else {
        if(distancia < 100){
            resultado = console.log(distancia * (umReal * 2))
        }else{
            resultado = console.log(distancia * 150)
        }
        
    }
    
    return resultado;
    

}

function processData(input) {
    const {tempo, distancia} = JSON.parse(input);
    solucao(tempo, distancia);
} 
