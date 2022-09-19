"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Aviao = /** @class */ (function () {
    function Aviao(nome, pesoMax, velocidade, pesoCarregado) {
        this.nome = nome;
        this.pesoMax = pesoMax;
        this.velocidade = velocidade;
        this.pesoCarregado = pesoCarregado;
    }
    return Aviao;
}());
console.log('----Avião----');
var nome = prompt('Digite o Modelo do avião: ');
var pesoMax = Number(prompt('Digite o Peso máximo do avião: '));
var velocidade = Number(prompt('Digite a velocidade do avião: '));
var pesoCarregado = Number(prompt('Digite o peso carregado:'));
console.clear();
var aviao = new Aviao(nome, pesoMax, pesoCarregado, velocidade);
console.log('---Especificações do Avião---');
console.log("Modelo: ".concat(nome));
console.log("Peso Maximo: ".concat(pesoMax, " kg"));
console.log("Velocidade: ".concat(velocidade, " km"));
console.log("Peso Carregado ".concat(pesoCarregado));
