

// operador for
// iterando de 1 a 100 e imprimindo na tela
console.log("for normal");
//    variável         teste         incremento 
//  de controle       lógico           
for (let i = 1; i < 101 /* i <= 100 */; i++) {
  console.log(i);
}

/** ITERANDO SOBRE LISTAS */
//operador for..in

console.log("\nfor..in");
const lista = [1,2,3,4,5];
for (let indice in lista) {
  console.log(indice); // Imprime o INDICE
}

//operador for
console.log("\nfor normal imprimindo valores do array");
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]); // imprime o valor
}


// operador for..of
console.log("\nfor..of imprimindo indice e valores do array");
for (let [indice, valor] of lista.entries()) {
  console.log(indice, valor); // Imprime o INDICE E O VALOR
}

console.log("\nfor..of imprimindo valores do array");
for (let valor of lista) {
  console.log(valor); // Imprime o VALOR
}


/** ITERANDO SOBRE DICIONARIOS */
const dicionario = {
  chave1: "valor 1",
  chave2: "valor 2",
  chave3: "valor 3",
  chave4: "valor 4",
  chave5: "valor 5"
};

console.log("\nfor..in em dicionários")
for (let chave in dicionario) {
  console.log(chave); // Imprime a CHAVE
}

console.log("\nfor..in em dicionários imprimindo valores")
for (let chave in dicionario) {
  console.log(dicionario[chave]); // Imprime a VALOR
}

console.log("\nforEach em Object.keys(dicionario)")
Object.keys(dicionario).forEach( chave => console.log(dicionario[chave]))

// ^ - Object.keys() pega todas as chaves do dicionário e as coloca em um array 


// OBS:

// HTMLCollections são iteráveis APENAS a partir de for..of

// HTMLCollection é uma lista de elementos html. Diferente dos arrays, 
// é uma estrutura de dados diferente, mas com comportamento semelhante.

// ex: const links = document.getElementsByClassName("link") 
// links instanceof HTMLCollection --- true;