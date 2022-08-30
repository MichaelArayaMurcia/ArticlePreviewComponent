let mostrado = false;

function mostrarBox() {
  console.log("hola");
  let box = document.getElementById("box");

  if (mostrado === false) {
    box.style.setProperty("display", "inline-flex");
  } else {
    box.style.setProperty("display", "none");
  }

  mostrado = !mostrado;
}
