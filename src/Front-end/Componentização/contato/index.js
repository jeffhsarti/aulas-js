console.log(window.location.pathname);
console.log(window.location.pathname.split('/'));

document.getElementById('link-produtos').onclick = (e) => {
  e.preventDefault();
  history.pushState(null, "Produtos", "../produtos/");
  history.go();
}

document.getElementById('link-sobre').onclick = (e) => {
  e.preventDefault();
  history.pushState(null, "Sobre Nós", "../");
  history.go();
}

document.getElementById('link-contato').onclick = (e) => {
  e.preventDefault();
  history.pushState(null, "Contato", "");
  history.go();
}