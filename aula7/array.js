for (let i = 0; i <= 4; i++) {
    console.log("Jogo " + i)
}

let jogoAtual = 0;

while (jogoAtual < 3) {
    console.log("Você está no jogo: " + jogoAtual);
    jogoAtual++;
}

let timesDeBasquete = ["Los Angeles Lakers", "Miami Heat", "Golden State Warriors", "Chicago Bulls", "Boston Celtics"];
console.log(timesDeBasquete[0]);
console.log(timesDeBasquete[4]);

let minhaListaDeTimes = [];
minhaListaDeTimes.push("Brooklyn Nets", "Milwaukee Bucks", "Phoenix Suns");
console.log(minhaListaDeTimes);

for (let i = 0; i < timesDeBasquete.length; i++) {
    console.log("O time na posição " + i + " é " + timesDeBasquete[i]);
}

let timesVencedores = ["Los Angeles Lakers", "Golden State Warriors", "Miami Heat", "Cleveland Cavaliers"];

for (let i = 0; i < timesVencedores.length; i++) {
    if (timesVencedores[i] === "Los Angeles Lakers" || timesVencedores[i] === "Golden State Warriors") {
        console.log(timesVencedores[i] + " é um time vencedor!");
    }
}

let j = 0;
let timesInternacionais = ["Toronto Raptors", "Dallas Mavericks", "San Antonio Spurs", "Orlando Magic"];

while (j < timesInternacionais.length) {
    console.log(timesInternacionais[j]);
    j++;
}
console.log("Fim da lista de times");

for (let i = 1; i <= 5; i++) {
    console.log("Recomendação de time número " + i);

    for (let j = 1; j <= 3; j++) {
        console.log(`Recomendação ${i}: Time ${j}`);
    }
}
