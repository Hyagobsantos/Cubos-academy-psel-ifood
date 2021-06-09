// Todo bom filme de ação que se preze deve ter uma cena em que uma bomba está prestes a explodir. O cenário é clássico: uma contagem regressiva, um fio azul, um veículo em movimento e a grande dúvida: cortar o fio vermelho ou o azul?

// Faça um programa que, dado um número a partir do qual deve-se começar a contagem regressiva, imprima na tela a contagem regressiva desse número até 0. Ao final da contagem, imprima a mensagem KABUM.

// Importante: cada número deve ser impresso em uma nova linha, assim como a mensagem KABUM ao final.

function solucao(numero) {
    
    while(0 <= numero){
       console.log(numero) 
      numero = numero-1
    }
    console.log("KABUM")
    
    
}

function processData(input) {
	solucao(parseInt(input, 10));
} 