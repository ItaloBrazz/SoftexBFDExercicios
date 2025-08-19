const readline = require('readline-sync');

let ano = parseInt(readline.question("Em qual ano você nasceu?: "));
let aniversario;

while (true) {
    aniversario = readline.question("Você já fez aniversário este ano? (s/n): ").toLowerCase();
    if (aniversario === 's' || aniversario === 'n') break;
    console.log("Por favor, responda apenas com 's' para sim ou 'n' para não.");
}

let idade = 2025 - ano;
if (aniversario === 'n') idade--;

let mensagem = idade >= 18 ? 'maior' : 'menor';
console.log(`Você tem ${idade} anos e é ${mensagem} de idade.`);