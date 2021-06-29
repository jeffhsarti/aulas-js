// const livro = {
//   autor: "Patrick Rothfuss",
//   titulo: "O Nome do Vento"
// }

// const mudancas = {
//   [new Date().getTime()]: "mudança 1",
//   1624404497703: "mudança 0"
// };

// const nome = "Jefferson";
// const sobrenome = "Sarti";

// const pessoa = {
//   [nome + " " + sobrenome]: "Nome do candango"
// }

// const pessoa = {
//   nome: nome,
//   sobrenome: sobrenome
// }

// const pessoa = {
//   nome,
//   sobrenome
// }

// console.log(pessoa);

// const obj = {};
// const att = "atributo";
// // obj.atributo = "foo";
// // obj["atributo"] = "foo";
// obj[att] = "foo"; // obj[att] !== obj.att

// console.log(obj);

// const objComFuncao = {
//   greet: function() {
//     console.log("Olá!")
//   },
//   goodbye: () => {
//     console.log("Adeus!")
//   },
//   xinga() {
//     console.log("Vai se danar!")
//   }
// }

// objComFuncao.greet();
// objComFuncao.xinga();
// objComFuncao.goodbye();

const pessoa1 = {
  nome: "João",
  sobrenome: "Souza",
  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  },
  cartas: [1, 2, 3, 4]
};

const pessoa2 = {...pessoa1};
// const pessoa2 = JSON.parse(JSON.stringify(pessoa1));
pessoa2.nome = "Joaquim";
pessoa2.cartas[0] = 1000;


console.log(pessoa1);
console.log(pessoa2);