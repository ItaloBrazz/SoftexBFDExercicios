let readline = require('readline-sync');

let nome = readline.question("Qual seu nome?: ");

switch(nome){
    case "italo":
        console.log('O seu nome é italo')
        break;
    case "jojo":
        console.log('o seu nome é jojo')
        break;
    case "cecilia":
        console.log('o seu nome é cecilia')
        break;
    case "Italo":
        console.log("pelo visto vc é o Italo")
        break;
    default:
        console.log("quem é vc irmao nao te conheco sai do meu sistema");
        break;
}