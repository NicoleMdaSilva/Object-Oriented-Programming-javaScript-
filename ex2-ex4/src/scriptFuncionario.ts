import PromptSync = require('prompt-sync');

const prompt = PromptSync();

class Funcionario{
    private nome: string;
    private idade: Number;
    private sexo: string;
    private profissao: string;
    private salario: Number;

    constructor(nome: string, idade: Number, sexo: string, profissao: string ,salario: Number){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.profissao = profissao
        this.salario = salario
    }
}

console.log('---Funcionario---');
const nome = prompt('Digite o nome: ');
const idade = Number(prompt('Digite a idade: '));
const sexo = prompt('Digite o Sexo: ');
const profissao = prompt('Área:');
const salario = Number(prompt('Quanto recebe: '))

const funcionario = new Funcionario(nome, idade, sexo, profissao, salario);

console.clear();

console.log('---Informações do funcionario---');
console.log(`Nome do funcionario(a): ${nome}`);
console.log(`Idade: ${idade} anos`);
console.log(`Sexo: ${sexo}`);
console.log(`Área que atua: ${profissao}`);
console.log(`Salário: ${salario} reais`);

