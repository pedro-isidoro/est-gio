/*03) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. */

import jsonValue from "./json/desafio03.json"

let qtd = jsonValue.length
console.log(jsonValue[0].dia)
console.log(jsonValue[0].valor)
let biggerValue = 0
let lesserValue = 0

let totalValue = 0
let diasSuperiores = 0 

qtd.forEach((element) => {
    let value = element.valor;
    if(value > 0){
        totalValue += value
    }else{
        return
    }
})

let average = totalValue / qtd;

qtd.forEach((element) => {
    let day = element.dia
    let value = element.valor
    if(value < lesserValue){
        diasSuperiores = value
    } else if(value > biggerValue){
        biggerValue = value
    } else if(value > average){
        diasSuperiores++
    }
})

console.log("Menor Valor: ", diasSuperiores);
console.log("Maior Valor: ", biggerValue);
console.log("Dias que superam a média: ", diasSuperiores);