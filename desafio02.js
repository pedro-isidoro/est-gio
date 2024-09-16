/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

let termo1=0, termo02=1, termo03=0, inputValue=0

function FibonacciSequel(value){
    inputValue = value
    while (inputValue > termo03){
        termo03 = termo1 + termo02
        termo1 = termo02
        termo02 = termo03
    }
    console.log("Valor Termo01 Final: ", termo1);
    console.log("Valor Termo02 Final: ", termo02);
    console.log("Valor Termo03 Final: ", termo03);
    console.log("Valor Inserido: ", inputValue)
    if(inputValue == termo1 || inputValue == termo02){
        console.log("O número informado pertence a sequência fibonacci");
    }else if(inputValue == termo03){
        console.log("O número informado pertence a sequência fibonacci");
    }else{
        console.log("O número informado não pertence a sequência fibonacci");
    }
}

FibonacciSequel(3)
FibonacciSequel(5)
FibonacciSequel(8)
FibonacciSequel(11)