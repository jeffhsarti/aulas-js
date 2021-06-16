const allLinks = document.getElementsByClassName("link");

for (let link of allLinks) {
  link.onclick = (e) => {
    e.preventDefault();
    const locationArray = window.location.pathname.split('/');
    let folder = link.id === "sobre" ? "" : `${link.id}/`;
    if (locationArray[locationArray.length - 2] === "Componentiza%C3%A7%C3%A3o") {
      history.pushState(null, "", `${folder}`);
      history.go();
    } else {
      history.pushState(null, "", `../${folder}`);
      history.go();
    }
  }
}