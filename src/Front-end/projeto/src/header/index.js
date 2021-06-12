// Estado
let corAtual = "#24d2e9";

function alteraCor() {
  console.log("alterando cor do cabeçalho")
  if (corAtual === "#24d2e9") {
    corAtual = "#0896a8";
    document.getElementById("header").style.color = "#0896a8";
  } else {
    corAtual = "#24d2e9";
    document.getElementById("header").style.color = "#24d2e9";
  }
}

setInterval(alteraCor, 2000);