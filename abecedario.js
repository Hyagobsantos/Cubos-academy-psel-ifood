// Uma brincadeira muito comum entre crianças é o ABC. Nessa brincadeira, uma letra é sorteada a cada rodada e cada criança que está brincando deve escrever uma palvra de uma determinada categoria que comece com a letra que foi sorteada.

// Por exemplo, caso a letra sorteada seja a letra "M" e o tema seja "frutas" as crianças podem falar coisas como:

// melancia
// melão
// maçã
// mamão
// e todas as respostas acima estariam corretas, pois começam com a letra M.

// Porém caso uma criança falasse "Laranja", por exemplo, essa criança teria perdido.

// O seu papel é fazer um programa que calcule quantas crianças perderam na rodada.

function solucao(letra, palavras) {
	var resultado = [];


for (let item of palavras){
        if (item[0] != letra){
            resultado.push(item)
        }
    }

  

    return console.log(resultado.length);
    
}

function processData(input) {
	const {letra, palavras} = JSON.parse(input)[0];
    solucao(letra, palavras);
} 