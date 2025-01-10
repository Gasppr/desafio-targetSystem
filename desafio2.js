function isFibonacci(num) {
    if (num < 0) {
        return `O número ${num} não pertence à sequência de Fibonacci (números negativos não estão incluídos).`;
    }

    let a = 0;
    let b = 1;

    if (num === a || num === b) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    while (b < num) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}


const resultado = isFibonacci(20);

console.log(resultado);
