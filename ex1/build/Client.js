const prompt = require('prompt-sync')()
var Cliente = /** @class */ (function () {
    function Cliente(nome, dataDeNascimento, sexo, CPF) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.sexo = sexo;
        this.CPF = CPF;
    }
    return Cliente;
}());
console.log('Digite seu nome');
var nome = prompt('>> ');
console.log('Digite seu gênero');
var sexo = prompt('>> ');
console.log('Digite sua data de nascimento');
var dataDeNascimento = prompt('>> ');
console.log('Digite seu CPF');
var CPF = prompt('>> ');
var cliente = new Cliente(nome, dataDeNascimento, sexo, CPF);
console.log("Nome: ".concat(nome));
console.log("Sexo: ".concat(sexo));
console.log("Data de nascimento: ".concat(dataDeNascimento));
console.log("CPF: ".concat(CPF));
