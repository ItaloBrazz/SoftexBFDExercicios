class Filme {
    public titulo: string;
    public genero: string;
    public duracao: number;
    public anoLancamento: number;
    public diretor: string;

    constructor(titulo, genero, duracao, anoLancamento, diretor) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
        this.anoLancamento = anoLancamento;
        this.diretor = diretor;
    }

    exibirDetalhes() {
        console.log(`Filme: ${this.titulo}, Gênero: ${this.genero}, Duração: ${this.duracao} minutos, Ano: ${this.anoLancamento}, Diretor: ${this.diretor}`);
    }

    iniciar() {
        console.log("Iniciando o filme...");
    }

    pausar() {
        console.log("Filme pausado.");
    }

    parar() {
        console.log("Filme parado.");
    }
}

const filme1 = new Filme("Inception", "Sci-Fi", 148, 2010, "Christopher Nolan");
const filme2 = new Filme("Avengers: Endgame", "Ação", 181, 2019, "Anthony Russo, Joe Russo");
const filme3 = new Filme("The Dark Knight", "Ação", 152, 2008, "Christopher Nolan");

filme1.exibirDetalhes();
filme2.iniciar();
filme3.pausar();


class Serie {
    public titulo: string;
    public genero: string;
    public temporadas: number;
    public anoLancamento: number;
    public plataforma: string;

    constructor(titulo, genero, temporadas, anoLancamento, plataforma) {
        this.titulo = titulo;
        this.genero = genero;
        this.temporadas = temporadas;
        this.anoLancamento = anoLancamento;
        this.plataforma = plataforma;
    }

    exibirDetalhes() {
        console.log(`Série: ${this.titulo}, Gênero: ${this.genero}, Temporadas: ${this.temporadas}, Ano: ${this.anoLancamento}, Plataforma: ${this.plataforma}`);
    }

    iniciar() {
        console.log("Iniciando série...");
    }

    pausar() {
        console.log("Série pausada.");
    }

    parar() {
        console.log("Série parada.");
    }
}

const serie1 = new Serie("Stranger Things", "Terror, Ficção", 4, 2016, "Netflix");
const serie2 = new Serie("The Witcher", "Fantasia", 2, 2019, "Netflix");
const serie3 = new Serie("Breaking Bad", "Drama", 5, 2008, "AMC");

serie1.exibirDetalhes();
serie2.iniciar();
serie3.pausar();


class Personagem {
    public nome: string;
    public idade: number;
    public papel: string;
    public filmeOuSerie: string;
    public ator: string;

    constructor(nome, idade, papel, filmeOuSerie, ator) {
        this.nome = nome;
        this.idade = idade;
        this.papel = papel;
        this.filmeOuSerie = filmeOuSerie;
        this.ator = ator;
    }

    exibirDetalhes() {
        console.log(`Personagem: ${this.nome}, Idade: ${this.idade}, Papel: ${this.papel}, Aparece em: ${this.filmeOuSerie}, Ator: ${this.ator}`);
    }

    falar() {
        console.log(`${this.nome} diz: "Olá, tudo bem?"`);
    }

    lutar() {
        console.log(`${this.nome} está lutando!`);
    }

    morrer() {
        console.log(`${this.nome} morreu...`);
    }
}

const personagem1 = new Personagem("Tony Stark", 48, "Homem de Ferro", "Avengers: Endgame", "Robert Downey Jr.");
const personagem2 = new Personagem("Eleven", 14, "Eleven", "Stranger Things", "Millie Bobby Brown");
const personagem3 = new Personagem("Geralt de Rivia", 100, "Geralt de Rivia", "The Witcher", "Henry Cavill");

personagem1.exibirDetalhes();
personagem2.falar();
personagem3.lutar();
