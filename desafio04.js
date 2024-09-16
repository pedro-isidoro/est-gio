/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  */

let spValue=67836.43, rjValue=36678.66, mgValue= 29229.88, esValue =  27165.48, othersValue = 19849.53
let oneHundredPerCentValue = spValue + rjValue + mgValue + esValue + othersValue

let test = 0

function totalPerCent (value){
    let percent = 100 * value / oneHundredPerCentValue
    console.log("value = ", percent.toFixed(2), "%");
    test += percent;
    console.log("Total value = ", test.toFixed(2), "%");
}

totalPerCent(spValue);
totalPerCent(rjValue);
totalPerCent(mgValue);
totalPerCent(esValue);
totalPerCent(othersValue);