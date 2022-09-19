import PromptSync = require('prompt-sync');

const  prompt = PromptSync();

class Aviao{
        private nome: string;
        private pesoMax: Number;
        private velocidade: Number;

        public pesoCarregado: Number;
        constructor(nome: string, pesoMax: Number, velocidade: Number, pesoCarregado: Number){
            this.nome = nome;
            this.pesoMax = pesoMax;
            this.velocidade = velocidade;
            this.pesoCarregado = pesoCarregado;
        }
}

console.log('----Avião----');

const nome = prompt('Digite o Modelo do avião: ');
const pesoMax = Number(prompt('Digite o Peso máximo do avião: '));
const velocidade = Number(prompt('Digite a velocidade do avião: '));
const pesoCarregado = Number(prompt('Digite o peso carregado:'));

console.clear();

const aviao = new Aviao(nome, pesoMax, pesoCarregado, velocidade);

console.log('---Especificações do Avião---')
console.log(`Modelo: ${nome}`);
console.log(`Peso Maximo: ${pesoMax} kg`);
console.log(`Velocidade: ${velocidade} km`);
console.log(`Peso Carregado ${pesoCarregado}`);


