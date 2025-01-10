
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};


function calcularPercentuais(faturamento) {
    const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / faturamentoTotal) * 100).toFixed(2);
    }

    return { faturamentoTotal, percentuais };
}


const resultado = calcularPercentuais(faturamentoPorEstado);

console.log("Faturamento total: R$", resultado.faturamentoTotal.toFixed(2));
console.log("Percentuais de representação por estado:");
for (const estado in resultado.percentuais) {
    console.log(`${estado}: ${resultado.percentuais[estado]}%`);
}
