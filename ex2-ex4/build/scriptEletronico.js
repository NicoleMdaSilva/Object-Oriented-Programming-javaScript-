"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Eletronico = /** @class */ (function () {
    function Eletronico(nome, valor, tamanho, peso, voltagem) {
        this.nome = nome;
        this.valor = valor;
        this.tamanho = tamanho;
        this.peso = peso;
        this.voltagem = voltagem;
    }
    return Eletronico;
}());
console.log('\t\tTipos de eletronico');
var nome = prompt('Digite o Modelo: ');
var tamanho = Number(prompt('Digite o tamanho: '));
var peso = Number(prompt('Digite o peso: '));
var voltagem = Number(prompt('Digita a voltagem do produto: '));
var valor = Number(prompt('Digite o preço: '));
var eletronico = new Eletronico(nome, valor, tamanho, peso, voltagem);
console.clear();
console.log("O ".concat(nome, " est\u00E1 saindo no valor de R$ ").concat(valor, "."));
console.log("Especifica\u00E7\u00F5es: \nTamanho: ".concat(tamanho, " \nPesa ").concat(peso, " kg \n").concat(voltagem, "hz"));
