"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, sexo, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.profissao = profissao;
        this.salario = salario;
    }
    return Funcionario;
}());
console.log('---Funcionario---');
var nome = prompt('Digite o nome: ');
var idade = Number(prompt('Digite a idade: '));
var sexo = prompt('Digite o Sexo: ');
var profissao = prompt('Área:');
var salario = Number(prompt('Quanto recebe: '));
var funcionario = new Funcionario(nome, idade, sexo, profissao, salario);
console.clear();
console.log('---Informações do funcionario---');
console.log("Nome do funcionario(a): ".concat(nome));
console.log("Idade: ".concat(idade, " anos"));
console.log("Sexo: ".concat(sexo));
console.log("\u00C1rea que atua: ".concat(profissao));
console.log("Sal\u00E1rio: ".concat(salario, " reais"));
