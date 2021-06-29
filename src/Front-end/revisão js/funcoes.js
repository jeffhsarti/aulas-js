// declarando funções

// function dizBomDia() { // função nomeada -> sofre hoisting
//   console.log("Bom dia!");
// }

// invocando funções
// dizBomDia();

// const dizBoaTarde = function () {
//   console.log("Boa tarde!");
// }
// dizBoaTarde();

// const dizBoaNoite = () => {
//   console.log("Boa noite!");
// }
// dizBoaNoite();

// [1,2,3].forEach(function (valor) {
//   console.log(valor);
// });

// [4,5,6].forEach((valor) => {
//   console.log(valor);
// });

// [7,8,9].forEach(imprimeValor);

// function imprimeValor(valor) {
//   console.log(valor)
// }

// function multiplica(numero1, numero2, numero3) {
//   console.log('parametros recebidos:', numero1, numero2, numero3);
//   console.log('resultado:', numero1 * numero2 * numero3);
// }

// let n1 = 10;
// let n2 = 20;
// let n3 = 30;

// multiplica(n1, n2, n3);

// function altera(valor) {
//   valor = "mudei";
//   console.log('valor: ', valor); // -> "mudei"
// }

// let numero = 10;
// altera(numero); // passagem é por valor
// console.log('numero: ', numero); // -> 10

// function altera2(lista) {
//   lista[0] = "Mudei hehe";
//   console.log(lista); // -> ["Mudei hehe", "Jeff", "Pa", "Gui"]
// }

// const nomes = ["Jão", "Jeff", "Pa", "Gui"];
// altera2(nomes); // passagem é por referência
// console.log(nomes); // -> ["Mudei hehe", "Jeff", "Pa", "Gui"]