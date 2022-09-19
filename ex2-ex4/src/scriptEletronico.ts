import PromptSync = require('prompt-sync');

const prompt = PromptSync();

class Eletronico{
    private nome: string;
    public valor: Number;
    private tamanho: Number;
    private peso: Number;
    private voltagem: Number;

    constructor(nome: string, valor: Number, tamanho: Number, peso: Number, voltagem: Number){
        this.nome = nome;
        this.valor = valor;
        this.tamanho = tamanho;
        this.peso = peso;
        this.voltagem = voltagem;
    }
}

console.log('\t\tTipos de eletronico')
const nome = prompt('Digite o Modelo: ');
const tamanho = Number (prompt('Digite o tamanho: '));
const peso = Number(prompt('Digite o peso: '));
const voltagem = Number(prompt('Digita a voltagem do produto: '));
const valor = Number(prompt('Digite o preço: '))

const eletronico = new Eletronico(nome, valor, tamanho, peso, voltagem);

console.clear();

console.log(`O ${nome} está saindo no valor de R$ ${valor}.`)
console.log(`Especificações: \nTamanho: ${tamanho} \nPesa ${peso} kg \n${voltagem}hz`);
