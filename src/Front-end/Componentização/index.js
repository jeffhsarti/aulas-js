// links -> todos os <a> cuja classe contenha link
const allLinks = document.getElementsByClassName("link");

// percorrendo cada um dos links da lista (HTMLCollection)
for (let link of allLinks) {
  // substituindo o EVENTO de click (onclick) de cada um dos links
  link.onclick = (e) => {
    // e.preventDefault() faz com que o evento PADRÃO de clique seja descartado.
    e.preventDefault();
    // transformando cada parte do caminho até meu index.html em array.
    // /src/Front-end/Componentização/
// ind  0     1        2                3          4
    // ['', 'src', 'Front-end', 'Componentização', '']
    const locationArray = window.location.pathname.split('/');
    // atribui o nome/caminho para a pasta do componente 
    let folder = link.id === "sobre" ? "" : `${link.id}/`;
    // Verifica se estamos na página "sobre"
    if (decodeURI(locationArray[locationArray.length - 2]) === "Componentização") {
      history.pushState(null, "", `${folder}`);
      history.go();
    } else {
      history.pushState(null, "", `../${folder}`);
      history.go();
    }
  }
}