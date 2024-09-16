/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
 */

let newString = "";

function reverseString(word){
for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
}
console.log(newString);
return newString;
}

// reverseString('test')
// reverseString('hello')
reverseString('Testando')