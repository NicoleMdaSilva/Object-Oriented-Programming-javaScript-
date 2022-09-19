
class Cliente{
    private nome: string;
    private dataDeNascimento: string;
    private sexo: string;
    private CPF: string;

    constructor(nome: string, dataDeNascimento: string, sexo: string, CPF: string){
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.sexo = sexo;
        this.CPF = CPF;
    }

}
console.log('Digite seu nome');
const nome = prompt('>> ');

console.log('Digite seu gênero');
const sexo = prompt('>> ');

console.log('Digite sua data de nascimento');
const dataDeNascimento = prompt('>> ');

console.log('Digite seu CPF');
const CPF = prompt('>> ');

const cliente = new Cliente(nome, dataDeNascimento, sexo, CPF);

console.log(`Nome: ${nome}`);
console.log(`Sexo: ${sexo}`);
console.log(`Data de nascimento: ${dataDeNascimento}`);
console.log(`CPF: ${CPF}`)





