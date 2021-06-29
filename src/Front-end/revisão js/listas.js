
/**
 * 
 * let lista = [ 1,  2,  3,  4,  5 ];
 * 
 * elementos = 5;
 * primeiro = 1;
 * ultimo = 5;
 * 
 * primeiroIndice = 0;
 * ultimoIndice = 4;
 * 
 * --------
 * 
 * elementos = lista.length;
 * primeiro = lista[0];
 * ultimo = lista[lista.length - 1];
 * 
 */

const lista = [1,2,3,4,5,6,7,8,9,10]; // mais performático
// const lista2 = new Array(1,2,3,4,5,6,7,8,9,10); // menos performático

// operadores de listas

// iteração
// lista.forEach(function (valor, indice) {
//   console.log(valor, indice);
// })

// lista.forEach((valor, indice) => {
//   console.log(valor, indice);
// })

// criação de uma lista a partir de outra
// const listaNova = lista.map( (valor, indice) => {
//   return valor * 2;
// })
// console.log(listaNova);

// remoção do ultimo elemento
// const ultimoElemento = lista.pop();
// console.log(ultimoElemento);
// console.log(lista);

// remoção do primeiro elemento
// const primeiroElemento = lista.shift();
// console.log(primeiroElemento);
// console.log(lista);

// adição de elemento ao final da lista
// lista.push(11);
// console.log(lista);

// adição de elemento ao começo da lista
// lista.unshift(0);
// console.log(lista);

// cortar a lista em partes
// const parte = lista.slice(0, 5); // -> Math.ceil(lista.length / 2) retorna a metade arredondada para cima
// console.log(parte);
// console.log(lista);

// ordenação de lista
// const listaBaguncada = [10,7,8,4,3,5,6,1,2,9,22];
// listaBaguncada.sort(); // ordena com base na tabela ascii
// console.log(listaBaguncada);

// const listaDeNomes = ["Jefferson", "João", "Paola", "Guilherme", "Roberval", "Denise", "Abraão"];
// listaDeNomes.sort();
// console.log(listaDeNomes);

// listaBaguncada.sort((a, b) => {
//   /**
//    * Caso retorne < 0 = a precede b
//    * Caso retorne > 0 = b precede a
//    * Caso retorne 0 = mantém ambos em suas devidas posições
//    */

//   return a - b; // a = 10 b = 7 | a - b = 3;
// });

// console.log(listaBaguncada);