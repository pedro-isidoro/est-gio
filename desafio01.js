/*1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/

let i = 13,
  soma = 0,
  k = 0;
console.log("Indice: ", i);
console.log("Soma: ", soma);
console.log("K: ", k);

function Teste01() {
  while (k < i) {
    k += 1;
    console.log("Testk: ", k);
    soma += k;
    console.log("TestSoma: ", soma);
}
    return soma;
}

Teste01();
