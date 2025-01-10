
const faturamentoMensal = [
    { dia: 1, valor: 100 },
    { dia: 2, valor: 200 },
    { dia: 3, valor: 0 },
    { dia: 4, valor: 0 },   
    { dia: 5, valor: 300 },
    { dia: 6, valor: 50 },
    { dia: 7, valor: 400 },
    { dia: 8, valor: 0 },   
    { dia: 9, valor: 250 },
    { dia: 10, valor: 0 }, 
];


function analisarFaturamento(dados) {

    const faturamentoValido = dados.filter(item => item.valor > 0);

    if (faturamentoValido.length === 0) {
        return "Não há dados de faturamento válido no mês.";
    }


    const menorValor = Math.min(...faturamentoValido.map(item => item.valor));
    const maiorValor = Math.max(...faturamentoValido.map(item => item.valor));
    const somaFaturamento = faturamentoValido.reduce((acc, item) => acc + item.valor, 0);
    const mediaMensal = somaFaturamento / faturamentoValido.length;


    const diasAcimaMedia = faturamentoValido.filter(item => item.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaMedia
    };
}


const resultado = analisarFaturamento(faturamentoMensal);
console.log("Menor valor de faturamento:", resultado.menorValor);
console.log("Maior valor de faturamento:", resultado.maiorValor);
console.log("Número de dias com faturamento acima da média:", resultado.diasAcimaMedia);
