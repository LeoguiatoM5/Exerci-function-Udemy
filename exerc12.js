//Faça um algoritmo que calcule o fatorial de um número
//Como calcular fatorial Para calcular o fatorial de um número, basta multiplicar o número por todos os outros números inteiros menores que ele, até chegar ao número 1
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1) //chamada recursiva
    }
}



console.log(fatorial(3))



// Exemplo 1: Função para calcular o fatorial de um número usando recursão
/*
function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(3)); // Resultado: 6
*/

// Exemplo 2: Função para calcular a soma dos números de 1 a n usando recursão
/*
function somaAteN(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + somaAteN(n - 1);
  }
}

console.log(somaAteN(5)); // Resultado: 15
*/

// Exemplo 3: Função para calcular o N-ésimo termo da sequência de Fibonacci usando recursão
/*
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6)); // Resultado: 8
*/

// Exemplo 4: Função para calcular o valor de um número elevado a uma potência usando recursão
/*
function potencia(base, expoente) {
  if (expoente === 0) {
    return 1;
  } else {
    return base * potencia(base, expoente - 1);
  }
}

console.log(potencia(2, 3)); // Resultado: 8
*/
