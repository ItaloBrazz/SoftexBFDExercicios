import { pessoa } from "./pessoa";

export class trabalhador extends pessoa{
    public horarioPonto : String;
    public salario      : Number;
    public cargo        : String;

    constructor(nome, idade, cpf, origem, horarioPonto, salario, cargo){
        super(nome, idade, cpf, origem);
        
        this.horarioPonto = horarioPonto;
        this.salario      = salario;
        this.cargo        = cargo;
    }

    tomarcafe(){}
}