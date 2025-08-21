const readline = require('readline-sync');

let nome = readline.question("Qual seu nome?: ");
let dia = parseInt(readline.question("Qual o dia do seu nascimento? Responda com 01-31: "));
let mes = parseInt(readline.question("Qual o mes do seu nascimento? Responda 01-12: "));
let ano = parseInt(readline.question("Qual o ano seu nascimento? Responda 1***/2***: "));
let cpf = readline.question("Qual seu CPF? Responda sem . e - : ");
let email = readline.question("Qual seu email?: ");
let pet = readline.question("Voce tem algum animal de estimacao? Responda com s/n: ");
let petnome

if(pet == "s"){
    pet = "Sim"
    petnome = readline.question("Qual nome do seu pet?: ")   
} else if (pet == "n"){
    pet = "Não"
}

console.log('---------------FORMULARIO---------------');
console.log(`Seu nome é: ${nome}`);
console.log(`Você nasceu na data de ${dia}/${mes}/${ano}`);
console.log(`Seu CPF é ${cpf}`);
console.log(`Seu email é ${email}`);
if(pet == "Sim"){
    console.log(`Você tem um pet chamado ${petnome}`);
}else {
    console.log(`Você não tem um pet`);
}
console.log('----------------------------------------');
