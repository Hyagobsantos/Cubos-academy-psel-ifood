// No e-commerce em que você trabalha são vendidos os mais diferentes tipos de produtos. Produtos que custam mais de 100 reais são considerados TOP DE LINHA.

// O gerente comercial da empresa, também conhecido como SEU CHEFE, quer saber duas coisas:

// Quantos reais a empresa faturou através da venda de produtos TOP DE LINHA.
// Quantos % do faturamento total da empresa a venda de produtos TOP DE LINHA representa.
// Como a lista de produtos é muito grande, não é possível fazer esse cálculo manualmente. Faça um programa que calcule as informações pedidas por seu chefe.

function solucao(produtos) {
	
    let somaTop = 0;
    let somaTotal = 0;
    var resultado1 = 0;
     var resultado2 = 0;

    for(let itensT of produtos){
        
            const precot = itensT.preco
            somaTotal += precot ;
        
        
    }
    
        for(let item of produtos){
            if(item.preco >= 10000){
                const precotopi = item.preco;
                somaTop += precotopi;
            }
            
        }
    
    const resposta = {
        totalTop: somaTop,
        percentual: (somaTop * 1.0) / somaTotal
    };
    
    console.log(resposta)
    
    
}

function processData(input) {
	solucao(JSON.parse(input));
} 