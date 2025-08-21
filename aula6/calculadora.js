let readline = require('readline-sync');

let n1 = parseFloat(readline.question("Digite seu primeiro numero: "));
let n2 = parseFloat(readline.question("Digite seu segundo numero: "));

console.log("------------CALCULADORA------------")
console.log("x - Multiplicar")
console.log("/ - Dividir")
console.log("- - Subtrair")
console.log("+ - Somar")
let operacao = readline.question("Qual operacao voce quer fazer?: ");
console.log("-----------------------------------")

switch(operacao){
    case "x":
        let resultadox = n1 * n2;
        console.log(`Resultado da sua multiplicação foi: ${resultadox}`);
        break;
    case "/":
        let resultadod = n1 / n2;
        console.log(`Resultado da sua divisão foi: ${resultadod}`);
        break;
    case "-":
        let resultadom = n1 - n2;
        console.log(`Resultado da sua subtração foi: ${resultadom}`);
        break;
    case "+":
        let resultadomm = n1 + n2;
        console.log(`Resultado da sua adição foi: ${resultadomm}`);
        break;
    default:
        console.log("Escolha um dos indicados na Calculadora!")
}