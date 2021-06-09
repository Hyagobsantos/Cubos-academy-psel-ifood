// Disputando o controle remoto da TV, dois irmãos, João e André decidiram quem ficaria com o controle jogando pedra, papel ou tesoura.

// Cada jogador escolhe uma das opções para jogar, sendo que:

// Perdra ganha de tesoura, mas perde de papel
// Papel ganha de pedra, mas perde de tesoura
// Tesoura ganha de papel, mas perde de pedra
// Caso ambos os jogadores joguem a mesma coisa, há um empate
// O seu objetivo é fazer um programa de computador que determine quem é o vencedor do jogo, ou informar se houve um empate

function solucao(joao, andre) {
    
    if(joao === andre ){
       console.log("EMPATE")
   }else if (joao == "PEDRA" && andre == "TESOURA"){
         console.log("JOAO")    
    }else if (joao == "TESOURA" && andre == "PAPEL"){
        console.log("JOAO")
    }else if (joao == "PAPEL" && andre == "PEDRA"){
        console.log("JOAO")
    }else {
        console.log("ANDRE")
    }
}


function processData(input) {
  const pairs = input.trim().split(" ");
  const j = pairs[0];
  const a = pairs[1];
  solucao(j, a);
} 