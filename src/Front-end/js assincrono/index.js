// javascript síncrono

console.log("Início");

function imprime() {
  setTimeout(() => {
    console.log("Olá Mundo!");
    console.log("JS Síncrono é lindo!");
  }, 2000)
}

imprime();

console.log("Fim");